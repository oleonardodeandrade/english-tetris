import { Modal } from './Modal';
import { Button } from './Button';

interface PauseModalProps {
  isOpen: boolean;
  onResume: () => void;
}

export const PauseModal = ({ isOpen, onResume }: PauseModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onResume} title="Game Paused">
      <div className="space-y-6">
        <div className="text-center text-gray-700">
          <p className="text-xl mb-4 font-semibold">Take a break! ☕</p>
          <p className="text-sm text-gray-600">Press P or click Resume to continue</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 shadow-inner">
          <h3 className="font-bold text-purple-900 mb-3 text-lg">⌨️ Controls:</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-center gap-2">
              <span className="font-bold text-purple-600">← →</span> Move piece
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-purple-600">↑ / Space</span> Rotate piece
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-purple-600">↓</span> Drop faster
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-purple-600">P</span> Pause/Resume
            </li>
          </ul>
        </div>

        <Button
          onClick={onResume}
          variant="gradient"
          size="lg"
          className="w-full"
          icon={<span>▶</span>}
        >
          Resume Game
        </Button>
      </div>
    </Modal>
  );
};
