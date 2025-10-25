import type { Tetromino, TetrominoType } from '../types/game.types';
import { getSmartLetter, getCompleteWord } from './wordFragments';

const createLettersForShape = (shape: number[][]): string[][] => {
  const blockCount = shape.flat().filter(cell => cell === 1).length;

  const useCompleteWord = blockCount >= 3 && blockCount <= 5 && Math.random() < 0.7;

  if (useCompleteWord) {
    const word = getCompleteWord(blockCount);

    if (word) {
      const letters: string[] = word.split('');
      let letterIndex = 0;

      return shape.map(row =>
        row.map(cell => {
          if (cell) {
            return letters[letterIndex++] || getSmartLetter();
          }
          return '';
        })
      );
    }
  }

  return shape.map(row =>
    row.map(cell => (cell ? getSmartLetter() : ''))
  );
};

export const TETROMINOES: Record<TetrominoType, Omit<Tetromino, 'letters'>> = {
  I: {
    type: 'I',
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: '#06b6d4',
  },
  O: {
    type: 'O',
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: '#eab308',
  },
  T: {
    type: 'T',
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: '#a855f7',
  },
  S: {
    type: 'S',
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    color: '#22c55e',
  },
  Z: {
    type: 'Z',
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    color: '#ef4444',
  },
  J: {
    type: 'J',
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: '#3b82f6',
  },
  L: {
    type: 'L',
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: '#f97316',
  },
};

export const TETROMINO_TYPES: TetrominoType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];

export const getRandomTetromino = (): Tetromino => {
  const randomType = TETROMINO_TYPES[Math.floor(Math.random() * TETROMINO_TYPES.length)];
  const base = TETROMINOES[randomType];
  return {
    ...base,
    letters: createLettersForShape(base.shape),
  };
};
