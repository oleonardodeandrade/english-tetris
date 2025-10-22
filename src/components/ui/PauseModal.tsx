import { Modal } from './Modal';

interface PauseModalProps {
  isOpen: boolean;
  onResume: () => void;
}

export const PauseModal = ({ isOpen, onResume }: PauseModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onResume} title="Game Paused">
      <div className="space-y-6">
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p className="text-lg mb-4">Take a break!</p>
          <p className="text-sm">Press P or click Resume to continue</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Controls:</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>← → : Move piece</li>
            <li>↑ / Space : Rotate piece</li>
            <li>↓ : Drop faster</li>
            <li>P : Pause/Resume</li>
          </ul>
        </div>

        <button
          onClick={onResume}
          className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
          Resume Game
        </button>
      </div>
    </Modal>
  );
};
