import type { Board as BoardType } from '../../types/game.types';
import { BLOCK_SIZE } from '../../constants/gameConfig';

interface BoardProps {
  board: BoardType;
}

export const Board = ({ board }: BoardProps) => {
  return (
    <div
      className="border-4 border-white/40 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl backdrop-blur-sm p-1"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${board[0].length}, ${BLOCK_SIZE}px)`,
        gridTemplateRows: `repeat(${board.length}, ${BLOCK_SIZE}px)`,
        gap: '2px',
      }}
    >
      {board.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${y}-${x}`}
            className="flex items-center justify-center font-bold text-white text-lg rounded-sm transition-all duration-200 shadow-md"
            style={{
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
              backgroundColor: cell?.color || 'rgba(148, 163, 184, 0.3)',
              boxShadow: cell?.color ? '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)' : 'none',
            }}
          >
            {cell?.letter}
          </div>
        ))
      )}
    </div>
  );
};
