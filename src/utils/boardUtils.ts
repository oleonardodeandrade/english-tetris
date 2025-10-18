import type { Board } from '../types/game.types';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../constants/gameConfig';

export const createEmptyBoard = (): Board => {
  return Array.from({ length: BOARD_HEIGHT }, () =>
    Array(BOARD_WIDTH).fill(0)
  );
};
