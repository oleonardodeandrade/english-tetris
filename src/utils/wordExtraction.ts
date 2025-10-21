import type { Board } from '../types/game.types';

export const extractLettersFromLine = (board: Board, lineIndex: number): string => {
  return board[lineIndex]
    .map(cell => cell?.letter || '')
    .join('');
};

const MIN_WORD_LENGTH = 3;
const MAX_WORD_LENGTH = 10;

export const generatePossibleWords = (letters: string): string[] => {
  const possibleWords: Set<string> = new Set();
  const cleanLetters = letters.trim();

  for (let start = 0; start < cleanLetters.length; start++) {
    for (let end = start + MIN_WORD_LENGTH; end <= cleanLetters.length && end - start <= MAX_WORD_LENGTH; end++) {
      const word = cleanLetters.slice(start, end);
      if (word.trim() === word && word.length >= MIN_WORD_LENGTH) {
        possibleWords.add(word);
      }
    }
  }

  return Array.from(possibleWords).sort((a, b) => b.length - a.length);
};

export const extractWordsFromLines = (board: Board, lineIndices: number[]): string[][] => {
  return lineIndices.map(lineIndex => {
    const letters = extractLettersFromLine(board, lineIndex);
    return generatePossibleWords(letters);
  });
};
