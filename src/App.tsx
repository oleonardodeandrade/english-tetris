import { Board } from './components/game/Board';
import { ScoreBoard } from './components/ui/ScoreBoard';
import { NextPiecePreview } from './components/ui/NextPiecePreview';
import { FoundWords } from './components/ui/FoundWords';
import { useGame } from './hooks/useGame';
import { useKeyboard } from './hooks/useKeyboard';

function App() {
  const { board, gameState, score, nextPiece, foundWords, moveLeft, moveRight, moveDown, rotate, togglePause, startGame } = useGame();

  useKeyboard({
    onLeft: moveLeft,
    onRight: moveRight,
    onDown: moveDown,
    onRotate: rotate,
    onPause: togglePause,
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        English Tetris
      </h1>

      {gameState === 'idle' && (
        <button
          onClick={startGame}
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
        >
          Start Game
        </button>
      )}

      {gameState === 'gameOver' && (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
            Game Over
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Final Score: {score.current}
          </p>
          <button
            onClick={startGame}
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Play Again
          </button>
        </div>
      )}

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
