import { useState } from 'react';
import { Board } from './components/game/Board';
import { ScoreBoard } from './components/ui/ScoreBoard';
import { NextPiecePreview } from './components/ui/NextPiecePreview';
import { FoundWords } from './components/ui/FoundWords';
import { GameOverModal } from './components/ui/GameOverModal';
import { PauseModal } from './components/ui/PauseModal';
import { HelpModal } from './components/ui/HelpModal';
import { useGame } from './hooks/useGame';
import { useKeyboard } from './hooks/useKeyboard';

function App() {
  const { board, gameState, score, nextPiece, foundWords, moveLeft, moveRight, moveDown, rotate, togglePause, startGame } = useGame();
  const [showHelp, setShowHelp] = useState(false);

  useKeyboard({
    onLeft: moveLeft,
    onRight: moveRight,
    onDown: moveDown,
    onRotate: rotate,
    onPause: togglePause,
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center p-4">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          English Tetris
        </h1>
        <button
          onClick={() => setShowHelp(true)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title="Help"
        >
          ?
        </button>
      </div>

      {gameState === 'idle' && (
        <button
          onClick={startGame}
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
          Start Game
        </button>
      )}

      <GameOverModal
        isOpen={gameState === 'gameOver'}
        score={score}
        onPlayAgain={startGame}
      />

      <PauseModal
        isOpen={gameState === 'paused'}
        onResume={togglePause}
      />

      <HelpModal
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />

      {(gameState === 'playing' || gameState === 'paused') && (
        <div className="flex flex-row gap-6 items-start justify-center">
          <div className="flex flex-col gap-4">
            <ScoreBoard score={score} />
            <NextPiecePreview nextPiece={nextPiece} />
          </div>

          <div className="flex flex-col items-center">
            <Board board={board} />
            <div className="text-center text-gray-700 dark:text-gray-300 mt-4">
              <p className="font-semibold text-lg">
                {gameState === 'paused' ? 'PAUSED' : 'PLAYING'}
              </p>
              <p className="text-sm mt-2">
                ← → : Move | ↑/Space: Rotate | ↓: Drop | P: Pause
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <FoundWords words={foundWords} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
