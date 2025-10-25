import { Modal } from './Modal';
import { Button } from './Button';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal = ({ isOpen, onClose }: HelpModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="How to Play">
      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-bold text-gray-900 mb-2 text-lg">🎮 Goal</h3>
          <p className="text-sm">
            Form English words by clearing lines! The letters on the blocks spell words when you complete a line.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-gray-900 mb-2 text-lg">🎯 How to Score</h3>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>Clear lines: 100 points each</li>
            <li>Form valid words: Bonus points!</li>
            <li>Longer words: More points</li>
            <li>Combo: Consecutive words multiply your score</li>
            <li>Higher levels: Increased multipliers</li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold text-gray-900 mb-2 text-lg">⌨️ Controls</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-purple-600">← →</span> Move
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-purple-600">↑ Space</span> Rotate
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-purple-600">↓</span> Drop
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-purple-600">P</span> Pause
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 shadow-md">
          <h3 className="font-bold text-purple-900 mb-2">💡 Pro Tip</h3>
          <p className="text-sm text-purple-800">
            Try to form words consecutively to build a combo and maximize your score!
          </p>
        </section>

        <Button
          onClick={onClose}
          variant="gradient"
          size="lg"
          className="w-full mt-4"
          icon={<span>✓</span>}
        >
          Got it!
        </Button>
      </div>
    </Modal>
  );
};
