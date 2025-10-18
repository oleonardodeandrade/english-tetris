import { Board, Tetromino, Position } from '../types/game.types';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../constants/gameConfig';

export const isValidMove = (
  board: Board,
  tetromino: Tetromino,
  position: Position
): boolean => {
  const { shape } = tetromino;

  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const newX = position.x + x;
        const newY = position.y + y;

        if (newX < 0 || newX >= BOARD_WIDTH) {
          return false;
        }

        if (newY >= BOARD_HEIGHT) {
          return false;
        }

        if (newY >= 0 && board[newY][newX] !== 0) {
          return false;
        }
      }
    }
  }

  return true;
};
