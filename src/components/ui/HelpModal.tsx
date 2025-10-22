import { Modal } from './Modal';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal = ({ isOpen, onClose }: HelpModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="How to Play">
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <section>
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">🎮 Goal</h3>
          <p className="text-sm">
            Form English words by clearing lines! The letters on the blocks spell words when you complete a line.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">🎯 How to Score</h3>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>Clear lines: 100 points each</li>
            <li>Form valid words: Bonus points!</li>
            <li>Longer words: More points</li>
            <li>Combo: Consecutive words multiply your score</li>
            <li>Higher levels: Increased multipliers</li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">⌨️ Controls</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
              <span className="font-semibold">← →</span> Move
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
              <span className="font-semibold">↑ Space</span> Rotate
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
              <span className="font-semibold">↓</span> Drop
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
              <span className="font-semibold">P</span> Pause
            </div>
          </div>
        </section>

        <section className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3">
          <h3 className="font-bold text-purple-900 dark:text-purple-200 mb-1">💡 Pro Tip</h3>
          <p className="text-sm text-purple-800 dark:text-purple-300">
            Try to form words consecutively to build a combo and maximize your score!
          </p>
        </section>

        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors mt-4"
        >
          Got it!
        </button>
      </div>
    </Modal>
  );
};
