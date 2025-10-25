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
          <div className="mb-6">
            <p className="text-6xl font-black bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-2 drop-shadow-lg">
              {score.current}
            </p>
            <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">
              Final Score
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-5 shadow-lg">
              <p className="text-3xl font-black text-purple-700">
                {score.level}
              </p>
              <p className="text-xs text-purple-600 uppercase font-semibold">
                Level
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-5 shadow-lg">
              <p className="text-3xl font-black text-blue-700">
                {score.linesCleared}
              </p>
              <p className="text-xs text-blue-600 uppercase font-semibold">
                Lines
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onPlayAgain}
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/50 text-lg"
        >
          Play Again
        </button>
      </div>
    </Modal>
  );
};
