import { Board } from './components/game/Board';
import { createEmptyBoard } from './utils/boardUtils';

function App() {
  const board = createEmptyBoard();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          English Tetris
        </h1>
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
