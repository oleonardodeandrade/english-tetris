import { useEffect, useState } from 'react';

interface WordCelebrationProps {
  word: string;
  points: number;
  show: boolean;
}

export const WordCelebration = ({ word, points, show }: WordCelebrationProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
      <div className="animate-celebration text-center">
        <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 mb-2 drop-shadow-lg">
          {word.toUpperCase()}
        </div>
        <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
          +{points} points!
        </div>
      </div>
    </div>
  );
};
