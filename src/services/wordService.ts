import wordlistText from '../data/wordlist.txt?raw';

export interface WordValidationResult {
  word: string;
  isValid: boolean;
}

let validWords: Set<string> | null = null;

const loadWordlist = (): Set<string> => {
  if (validWords) {
    return validWords;
  }

  validWords = new Set(
    wordlistText
      .split('\n')
      .map(word => word.trim().toLowerCase())
      .filter(word => word.length >= 3)
  );

  return validWords;
};

export const validateWord = (word: string): WordValidationResult => {
  const normalizedWord = word.toLowerCase().trim();

  if (normalizedWord.length < 3) {
    return { word: normalizedWord, isValid: false };
  }

  const wordlist = loadWordlist();
  const isValid = wordlist.has(normalizedWord);

  return {
    word: normalizedWord,
    isValid,
  };
};

export const validateWords = (words: string[]): WordValidationResult[] => {
  return words.map(word => validateWord(word));
};
