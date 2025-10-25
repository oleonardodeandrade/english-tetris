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
        className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl min-w-[400px] max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-white/50 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-8 p-6 border-b border-gray-200">
          <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-gray-900 flex-1">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 flex-shrink-0 ml-4"
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
