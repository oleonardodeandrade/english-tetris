import type { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
      onClick={onClose}
    >
      <div
        className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl min-w-[400px] max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-300 dark:border-gray-600"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-8 p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex-1">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0 ml-4"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
