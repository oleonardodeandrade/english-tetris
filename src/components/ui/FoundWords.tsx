import type { FoundWord } from '../../types/game.types';

interface FoundWordsProps {
  words: FoundWord[];
}

export const FoundWords = ({ words }: FoundWordsProps) => {
  const recentWords = words.slice(-5).reverse();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg w-[200px]">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
        Words Found
      </h3>
      {words.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
          No words yet
        </p>
      ) : (
        <>
          <div className="space-y-2">
            {recentWords.map((foundWord, index) => (
              <div
                key={`${foundWord.word}-${words.length - index}`}
                className="flex items-center justify-between bg-purple-100 dark:bg-purple-900/30 rounded px-3 py-2 animate-slideIn"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <span className="font-semibold text-purple-900 dark:text-purple-200 uppercase">
                  {foundWord.word}
                </span>
                <span className="text-sm text-purple-700 dark:text-purple-300">
                  +{foundWord.points}
                </span>
              </div>
            ))}
          </div>
          {words.length > 5 && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Showing last 5 of {words.length} words
            </p>
          )}
        </>
      )}
    </div>
  );
};
