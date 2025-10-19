import type { Tetromino } from '../../types/game.types';
import { BLOCK_SIZE } from '../../constants/gameConfig';

type NextPiecePreviewProps = {
  nextPiece: Tetromino;
};

export const NextPiecePreview = ({ nextPiece }: NextPiecePreviewProps) => {
  const { shape, color, letters } = nextPiece;

  const rows = shape.length;
  const cols = shape[0].length;
  const width = cols * BLOCK_SIZE;
  const height = rows * BLOCK_SIZE;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-center mb-4">
        Next Piece
      </h3>

      <div className="flex items-center justify-center">
        <div
          className="relative"
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          {shape.map((row, y) =>
            row.map((cell, x) =>
              cell ? (
                <div
                  key={`${y}-${x}`}
                  className="absolute border border-gray-900/20 dark:border-gray-100/10 flex items-center justify-center font-bold text-white shadow-sm"
                  style={{
                    left: `${x * BLOCK_SIZE}px`,
                    top: `${y * BLOCK_SIZE}px`,
                    width: `${BLOCK_SIZE}px`,
                    height: `${BLOCK_SIZE}px`,
                    backgroundColor: color,
                    fontSize: '14px',
                  }}
                >
                  {letters[y][x]}
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </div>
  );
};
