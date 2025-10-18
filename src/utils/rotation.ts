import type { Tetromino } from '../types/game.types';

export const rotateClockwise = (tetromino: Tetromino): Tetromino => {
  const { shape } = tetromino;
  const n = shape.length;
  const rotated: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      rotated[x][n - 1 - y] = shape[y][x];
    }
  }

  return {
    ...tetromino,
    shape: rotated,
  };
};

export const rotateCounterClockwise = (tetromino: Tetromino): Tetromino => {
  const { shape } = tetromino;
  const n = shape.length;
  const rotated: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      rotated[n - 1 - x][y] = shape[y][x];
    }
  }

  return {
    ...tetromino,
    shape: rotated,
  };
};
