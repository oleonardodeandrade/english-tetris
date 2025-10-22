import { Modal } from './Modal';
import type { Score } from '../../types/game.types';

interface GameOverModalProps {
  isOpen: boolean;
  score: Score;
  onPlayAgain: () => void;
}

export const GameOverModal = ({ isOpen, score, onPlayAgain }: GameOverModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onPlayAgain} title="Game Over">
      <div className="space-y-6">
        <div className="text-center">
          <div className="mb-4">
            <p className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2">
              {score.current}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Final Score
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {score.level}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                Level
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {score.linesCleared}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                Lines
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onPlayAgain}
          className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
          Play Again
        </button>
      </div>
    </Modal>
  );
};
