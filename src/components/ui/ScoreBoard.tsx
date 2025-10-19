import type { Score } from '../../types/game.types';

type ScoreBoardProps = {
  score: Score;
};

export const ScoreBoard = ({ score }: ScoreBoardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
      <div className="text-center">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Score
        </h2>
        <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          {score.current}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Level
          </h3>
          <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {score.level}
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Lines
          </h3>
          <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {score.linesCleared}
          </p>
        </div>
      </div>
    </div>
  );
};
