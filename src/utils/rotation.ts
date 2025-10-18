import type { Tetromino } from '../types/game.types';

export const rotateClockwise = (tetromino: Tetromino): Tetromino => {
  const { shape, letters } = tetromino;
  const n = shape.length;
  const rotatedShape: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  const rotatedLetters: string[][] = Array.from({ length: n }, () => Array(n).fill(''));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      rotatedShape[x][n - 1 - y] = shape[y][x];
      rotatedLetters[x][n - 1 - y] = letters[y][x];
    }
  }

  return {
    ...tetromino,
    shape: rotatedShape,
    letters: rotatedLetters,
  };
};

export const rotateCounterClockwise = (tetromino: Tetromino): Tetromino => {
  const { shape, letters } = tetromino;
  const n = shape.length;
  const rotatedShape: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  const rotatedLetters: string[][] = Array.from({ length: n }, () => Array(n).fill(''));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      rotatedShape[n - 1 - x][y] = shape[y][x];
      rotatedLetters[n - 1 - x][y] = letters[y][x];
    }
  }

  return {
    ...tetromino,
    shape: rotatedShape,
    letters: rotatedLetters,
  };
};
