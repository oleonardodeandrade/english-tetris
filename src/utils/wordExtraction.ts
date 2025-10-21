import type { Board } from '../types/game.types';

export const extractLettersFromLine = (board: Board, lineIndex: number): string => {
  return board[lineIndex]
    .map(cell => cell?.letter || '')
    .join('');
};

export const generatePossibleWords = (letters: string): string[] => {
  const possibleWords: Set<string> = new Set();
  const cleanLetters = letters.trim();

  for (let start = 0; start < cleanLetters.length; start++) {
    for (let end = start + 2; end <= cleanLetters.length; end++) {
      const word = cleanLetters.slice(start, end);
      if (word.length >= 2 && word.trim() === word) {
        possibleWords.add(word);
      }
    }
  }

  return Array.from(possibleWords);
};

export const extractWordsFromLines = (board: Board, lineIndices: number[]): string[][] => {
  return lineIndices.map(lineIndex => {
    const letters = extractLettersFromLine(board, lineIndex);
    return generatePossibleWords(letters);
  });
};
