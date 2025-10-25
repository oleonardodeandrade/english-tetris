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
    <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-[200px] border border-white/30">
      <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wide text-center mb-4">
        Next Piece
      </h3>

      <div className="flex items-center justify-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
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
                  className="absolute rounded-md flex items-center justify-center font-bold text-white shadow-lg"
                  style={{
                    left: `${x * BLOCK_SIZE}px`,
                    top: `${y * BLOCK_SIZE}px`,
                    width: `${BLOCK_SIZE}px`,
                    height: `${BLOCK_SIZE}px`,
                    backgroundColor: color,
                    fontSize: '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
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
