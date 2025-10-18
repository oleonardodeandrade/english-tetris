import { Board as BoardType } from '../../types/game.types';
import { BLOCK_SIZE } from '../../constants/gameConfig';

interface BoardProps {
  board: BoardType;
}

export const Board = ({ board }: BoardProps) => {
  return (
    <div
      className="border-4 border-gray-800 dark:border-gray-200 bg-gray-100 dark:bg-gray-900"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${board[0].length}, ${BLOCK_SIZE}px)`,
        gridTemplateRows: `repeat(${board.length}, ${BLOCK_SIZE}px)`,
        gap: '1px',
      }}
    >
      {board.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${y}-${x}`}
            className={`
              ${cell ? 'bg-gray-600' : 'bg-gray-200 dark:bg-gray-800'}
              border border-gray-300 dark:border-gray-700
            `}
            style={{
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
            }}
          />
        ))
      )}
    </div>
  );
};
