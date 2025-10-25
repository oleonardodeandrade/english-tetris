import { useState, useCallback, useEffect } from 'react';
import type { Board, Tetromino, Position, GameState, Score, FoundWord } from '../types/game.types';
import { createEmptyBoard } from '../utils/boardUtils';
import { getRandomTetromino } from '../data/tetrominoes';
import { isValidMove } from '../utils/collision';
import { rotateClockwise } from '../utils/rotation';
import { detectCompletedLines, removeCompletedLines } from '../utils/lineClearing';
import { extractWordsFromLines } from '../utils/wordExtraction';
import { validateWords } from '../services/wordService';
import { GAME_SPEED, SCORING } from '../constants/gameConfig';

export const useGame = () => {
  const [board, setBoard] = useState<Board>(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<Tetromino>(getRandomTetromino());
  const [nextPiece, setNextPiece] = useState<Tetromino>(getRandomTetromino());
  const [position, setPosition] = useState<Position>({ x: 3, y: 0 });
  const [gameState, setGameState] = useState<GameState>('idle');
  const [score, setScore] = useState<Score>({
    current: 0,
    level: 1,
    linesCleared: 0,
    combo: 0,
  });
  const [foundWords, setFoundWords] = useState<FoundWord[]>([]);

  const mergePieceToBoard = useCallback((): Board => {
    const newBoard = board.map(row => [...row]);
    const { shape, color, letters } = currentPiece;

    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] && position.y + y >= 0) {
          newBoard[position.y + y][position.x + x] = {
            color,
            letter: letters[y][x],
          };
        }
      }
    }

    return newBoard;
  }, [board, currentPiece, position]);

  const moveDown = useCallback(() => {
    const newPosition = { ...position, y: position.y + 1 };

    if (isValidMove(board, currentPiece, newPosition)) {
      setPosition(newPosition);
    } else {
      let newBoard = mergePieceToBoard();

      const completedLines = detectCompletedLines(newBoard);
      if (completedLines.length > 0) {
        const wordsFromLines = extractWordsFromLines(newBoard, completedLines);
        const allWords = wordsFromLines.flat();

        let longestWord: { word: string; isValid: boolean } = { word: '', isValid: false };

        for (const word of allWords) {
          const result = validateWords([word]);
          if (result[0].isValid) {
            longestWord = result[0];
            break;
          }
        }

        newBoard = removeCompletedLines(newBoard, completedLines);

        const linesCount = completedLines.length;
        const pointsEarned = linesCount * SCORING.LINE_CLEAR;

        setScore(prev => {
          const newLinesCleared = prev.linesCleared + linesCount;
          const newLevel = Math.floor(newLinesCleared / SCORING.LINES_PER_LEVEL) + 1;
          let newCombo = prev.combo;
          let finalPoints = pointsEarned;

          if (longestWord.isValid) {
            newCombo = prev.combo + 1;

            const comboMultiplier = newCombo > 1 ? 1 + (newCombo - 1) * (SCORING.COMBO_MULTIPLIER - 1) : 1;

            const wordLength = longestWord.word.length;
            const difficultyBonus = wordLength >= 6 ? (wordLength - 5) * SCORING.DIFFICULTY_BONUS_PER_LETTER : 0;
            const levelMultiplier = 1 + (newLevel - 1) * SCORING.LEVEL_MULTIPLIER;

            const baseWordPoints = SCORING.WORD_BASE * wordLength * SCORING.WORD_LENGTH_MULTIPLIER;
            const wordBonus = Math.floor(
              (baseWordPoints + difficultyBonus) * comboMultiplier * levelMultiplier
            );

            finalPoints += wordBonus;

            setFoundWords(prevWords => [...prevWords, {
              word: longestWord.word,
              points: wordBonus,
              lineIndex: completedLines[0],
            }]);
          } else {
            newCombo = 0;
          }

          return {
            ...prev,
            current: prev.current + finalPoints,
            linesCleared: newLinesCleared,
            level: newLevel,
            combo: newCombo,
          };
        });
      }

      setBoard(newBoard);

      const nextPosition = { x: 3, y: 0 };

      if (!isValidMove(newBoard, nextPiece, nextPosition)) {
        setGameState('gameOver');
        return;
      }

      setCurrentPiece(nextPiece);
      setNextPiece(getRandomTetromino());
      setPosition(nextPosition);
    }
  }, [board, currentPiece, nextPiece, position, mergePieceToBoard]);

  const moveLeft = useCallback(() => {
    const newPosition = { ...position, x: position.x - 1 };
    if (isValidMove(board, currentPiece, newPosition)) {
      setPosition(newPosition);
    }
  }, [board, currentPiece, position]);

  const moveRight = useCallback(() => {
    const newPosition = { ...position, x: position.x + 1 };
    if (isValidMove(board, currentPiece, newPosition)) {
      setPosition(newPosition);
    }
  }, [board, currentPiece, position]);

  const rotate = useCallback(() => {
    const rotated = rotateClockwise(currentPiece);
    if (isValidMove(board, rotated, position)) {
      setCurrentPiece(rotated);
    }
  }, [board, currentPiece, position]);

  const togglePause = useCallback(() => {
    setGameState(prev => prev === 'playing' ? 'paused' : 'playing');
  }, []);

  const startGame = useCallback(() => {
    setBoard(createEmptyBoard());
    setCurrentPiece(getRandomTetromino());
    setNextPiece(getRandomTetromino());
    setPosition({ x: 3, y: 0 });
    setScore({
      current: 0,
      level: 1,
      linesCleared: 0,
      combo: 0,
    });
    setFoundWords([]);
    setGameState('playing');
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const speed = Math.max(
      GAME_SPEED.MIN,
      GAME_SPEED.INITIAL - (score.level - 1) * GAME_SPEED.DECREASE_PER_LEVEL
    );

    const interval = setInterval(() => {
      moveDown();
    }, speed);

    return () => clearInterval(interval);
  }, [gameState, moveDown, score.level]);

  const displayBoard = mergePieceToBoard();

  return {
    board: displayBoard,
    gameState,
    score,
    nextPiece,
    foundWords,
    moveLeft,
    moveRight,
    moveDown,
    rotate,
    togglePause,
    startGame,
  };
};
