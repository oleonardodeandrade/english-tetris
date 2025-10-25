export type Cell = {
  color: string;
  letter: string;
} | null;

export type Board = Cell[][];

export type Position = {
  x: number;
  y: number;
};

export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export type Tetromino = {
  type: TetrominoType;
  shape: number[][];
  color: string;
  letters: string[][];
};

export type GameState = 'idle' | 'playing' | 'paused' | 'gameOver';

export type Score = {
  current: number;
  level: number;
  linesCleared: number;
  combo: number;
};

export type FoundWord = {
  word: string;
  points: number;
  lineIndex: number;
};
