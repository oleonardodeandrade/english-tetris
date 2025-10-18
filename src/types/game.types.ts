export type CellValue = 0 | string;

export type Board = CellValue[][];

export type Position = {
  x: number;
  y: number;
};

export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export type Tetromino = {
  type: TetrominoType;
  shape: number[][];
  color: string;
};

export type GameState = 'idle' | 'playing' | 'paused' | 'gameOver';
