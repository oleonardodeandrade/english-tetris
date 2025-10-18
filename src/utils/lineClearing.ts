import type { Board } from '../types/game.types';
import { BOARD_WIDTH } from '../constants/gameConfig';

export const detectCompletedLines = (board: Board): number[] => {
  const completedLines: number[] = [];

  for (let y = 0; y < board.length; y++) {
    const isComplete = board[y].every(cell => cell !== null);
    if (isComplete) {
      completedLines.push(y);
    }
  }

  return completedLines;
};

export const removeCompletedLines = (board: Board, completedLines: number[]): Board => {
  const newBoard = board.filter((_, index) => !completedLines.includes(index));

  const linesRemoved = completedLines.length;
  const emptyLines = Array.from({ length: linesRemoved }, () =>
    Array(BOARD_WIDTH).fill(null)
  );

  return [...emptyLines, ...newBoard];
};
