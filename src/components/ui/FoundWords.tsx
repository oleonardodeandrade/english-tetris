import type { FoundWord } from '../../types/game.types';

interface FoundWordsProps {
  words: FoundWord[];
}

export const FoundWords = ({ words }: FoundWordsProps) => {
  const recentWords = words.slice(-5).reverse();

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl w-[200px] border border-white/30">
      <h3 className="text-lg font-bold text-white mb-4">
        Words Found
      </h3>
      {words.length === 0 ? (
        <p className="text-sm text-white/70 text-center py-4">
          No words yet
        </p>
      ) : (
        <>
          <div className="space-y-2">
            {recentWords.map((foundWord, index) => (
              <div
                key={`${foundWord.word}-${words.length - index}`}
                className="flex items-center justify-between bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl px-3 py-2 animate-slideIn shadow-lg"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <span className="font-bold text-white uppercase">
                  {foundWord.word}
                </span>
                <span className="text-sm font-semibold text-white/90 bg-white/20 px-2 py-1 rounded-lg">
                  +{foundWord.points}
                </span>
              </div>
            ))}
          </div>
          {words.length > 5 && (
            <p className="text-xs text-white/70 mt-3 text-center">
              Showing last 5 of {words.length} words
            </p>
          )}
        </>
      )}
    </div>
  );
};
