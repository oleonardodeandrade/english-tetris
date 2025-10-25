import type { Score } from '../../types/game.types';

type ScoreBoardProps = {
  score: Score;
};

export const ScoreBoard = ({ score }: ScoreBoardProps) => {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-6 space-y-4 w-[200px] border border-white/30">
      <div className="text-center">
        <h2 className="text-sm font-semibold text-white/80 uppercase tracking-wide">
          Score
        </h2>
        <p className="text-4xl font-black text-white drop-shadow-lg">
          {score.current}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center bg-white/10 rounded-xl p-2 backdrop-blur-sm">
          <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wide">
            Level
          </h3>
          <p className="text-xl font-bold text-white">
            {score.level}
          </p>
        </div>

        <div className="text-center bg-white/10 rounded-xl p-2 backdrop-blur-sm">
          <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wide">
            Lines
          </h3>
          <p className="text-xl font-bold text-white">
            {score.linesCleared}
          </p>
        </div>
      </div>

      {score.combo > 0 && (
        <div className="text-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-3 animate-pulse shadow-lg">
          <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
            Combo
          </h3>
          <p className="text-2xl font-bold text-white drop-shadow-md">
            {score.combo}x
          </p>
        </div>
      )}
    </div>
  );
};
