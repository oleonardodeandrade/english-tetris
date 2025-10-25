import wordlistText from './wordlist.txt?raw';

let wordFragments: string[] = [];
let initialized = false;

const initializeFragments = () => {
  if (initialized) return;

  const words = wordlistText
    .split('\n')
    .map(w => w.trim().toUpperCase())
    .filter(w => w.length >= 3 && w.length <= 8);

  const fragments = new Set<string>();

  words.forEach(word => {
    for (let i = 0; i < word.length - 1; i++) {
      fragments.add(word.slice(i, i + 2));

      if (i < word.length - 2) {
        fragments.add(word.slice(i, i + 3));
      }
    }

    if (word.length >= 3) {
      fragments.add(word.slice(0, 3));
      fragments.add(word.slice(-3));
    }
  });

  wordFragments = Array.from(fragments);
  initialized = true;
};

export const getSmartLetter = (): string => {
  if (!initialized) {
    initializeFragments();
  }

  const useFragment = Math.random() < 0.7;

  if (useFragment && wordFragments.length > 0) {
    const fragment = wordFragments[Math.floor(Math.random() * wordFragments.length)];
    return fragment[Math.floor(Math.random() * fragment.length)];
  }

  const vowels = 'AEIOU';
  const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
  const useVowel = Math.random() < 0.4;

  if (useVowel) {
    return vowels[Math.floor(Math.random() * vowels.length)];
  } else {
    return consonants[Math.floor(Math.random() * consonants.length)];
  }
};

export const getWordFragment = (length: number): string => {
  if (!initialized) {
    initializeFragments();
  }

  const validFragments = wordFragments.filter(f => f.length === length);

  if (validFragments.length === 0) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += getSmartLetter();
    }
    return result;
  }

  return validFragments[Math.floor(Math.random() * validFragments.length)];
};

export const getCompleteWord = (length: number): string | null => {
  const words = wordlistText
    .split('\n')
    .map(w => w.trim().toUpperCase())
    .filter(w => w.length === length);

  if (words.length === 0) return null;

  return words[Math.floor(Math.random() * words.length)];
};
