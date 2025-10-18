import { useState, useCallback, useEffect } from 'react';
import type { Board, Tetromino, Position, GameState } from '../types/game.types';
import { createEmptyBoard } from '../utils/boardUtils';
import { getRandomTetromino } from '../data/tetrominoes';
import { isValidMove } from '../utils/collision';
import { rotateClockwise } from '../utils/rotation';
import { GAME_SPEED } from '../constants/gameConfig';

export const useGame = () => {
  const [board, setBoard] = useState<Board>(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<Tetromino>(getRandomTetromino());
  const [position, setPosition] = useState<Position>({ x: 3, y: 0 });
  const [gameState, setGameState] = useState<GameState>('idle');

  const mergePieceToBoard = useCallback((): Board => {
    const newBoard = board.map(row => [...row]);
    const { shape, color } = currentPiece;

    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] && position.y + y >= 0) {
          newBoard[position.y + y][position.x + x] = color;
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
      const newBoard = mergePieceToBoard();
      setBoard(newBoard);
      setCurrentPiece(getRandomTetromino());
      setPosition({ x: 3, y: 0 });
    }
  }, [board, currentPiece, position, mergePieceToBoard]);

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
    setPosition({ x: 3, y: 0 });
    setGameState('playing');
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      moveDown();
    }, GAME_SPEED.INITIAL);

    return () => clearInterval(interval);
  }, [gameState, moveDown]);

  const displayBoard = mergePieceToBoard();

  return {
    board: displayBoard,
    gameState,
    moveLeft,
    moveRight,
    moveDown,
    rotate,
    togglePause,
    startGame,
  };
};
