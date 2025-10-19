import { useEffect } from 'react';

interface KeyboardControls {
  onLeft: () => void;
  onRight: () => void;
  onDown: () => void;
  onRotate: () => void;
  onPause: () => void;
}

export const useKeyboard = ({
  onLeft,
  onRight,
  onDown,
  onRotate,
  onPause,
}: KeyboardControls) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          onLeft();
          break;
        case 'ArrowRight':
          event.preventDefault();
          onRight();
          break;
        case 'ArrowDown':
          event.preventDefault();
          onDown();
          break;
        case 'ArrowUp':
        case ' ':
          event.preventDefault();
          onRotate();
          break;
        case 'p':
        case 'P':
          event.preventDefault();
          onPause();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onLeft, onRight, onDown, onRotate, onPause]);
};
