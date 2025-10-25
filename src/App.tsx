import { useState, useEffect } from 'react';
import { Board } from './components/game/Board';
import { ScoreBoard } from './components/ui/ScoreBoard';
import { NextPiecePreview } from './components/ui/NextPiecePreview';
import { FoundWords } from './components/ui/FoundWords';
import { WordCelebration } from './components/ui/WordCelebration';
import { GameOverModal } from './components/ui/GameOverModal';
import { PauseModal } from './components/ui/PauseModal';
import { HelpModal } from './components/ui/HelpModal';
import { useGame } from './hooks/useGame';
import { useKeyboard } from './hooks/useKeyboard';

function App() {
  const { board, gameState, score, nextPiece, foundWords, moveLeft, moveRight, moveDown, rotate, togglePause, startGame } = useGame();
  const [showHelp, setShowHelp] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastWord, setLastWord] = useState({ word: '', points: 0 });

  useKeyboard({
    onLeft: moveLeft,
    onRight: moveRight,
    onDown: moveDown,
    onRotate: rotate,
    onPause: togglePause,
  });

  useEffect(() => {
    if (foundWords.length > 0) {
      const latestWord = foundWords[foundWords.length - 1];
      setLastWord(latestWord);
      setShowCelebration(true);
    }
  }, [foundWords.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex flex-col items-center justify-center p-4">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-5xl font-black text-gray-900 bg-gradient-to-r from-white to-purple-100 bg-clip-text drop-shadow-2xl">
          English Tetris
        </h1>
        <button
          onClick={() => setShowHelp(true)}
          className="text-white hover:text-purple-100 text-2xl w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30 shadow-lg"
          title="Help"
        >
          ?
        </button>
      </div>

      {gameState === 'idle' && (
        <button
          onClick={startGame}
          className="px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/50 text-xl"
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

      <WordCelebration
        word={lastWord.word}
        points={lastWord.points}
        show={showCelebration}
      />

      {(gameState === 'playing' || gameState === 'paused') && (
        <div className="flex flex-row gap-6 items-start justify-center">
          <div className="flex flex-col gap-4">
            <ScoreBoard score={score} />
            <NextPiecePreview nextPiece={nextPiece} />
          </div>

          <div className="flex flex-col items-center">
            <Board board={board} />
            <div className="text-center text-white mt-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
              <p className="font-bold text-xl mb-2">
                {gameState === 'paused' ? '⏸ PAUSED' : '▶ PLAYING'}
              </p>
              <p className="text-sm">
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
