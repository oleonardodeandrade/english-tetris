export const LETTER_FREQUENCY = {
  E: 12.70,
  T: 9.06,
  A: 8.17,
  O: 7.51,
  I: 6.97,
  N: 6.75,
  S: 6.33,
  H: 6.09,
  R: 5.99,
  D: 4.25,
  L: 4.03,
  C: 2.78,
  U: 2.76,
  M: 2.41,
  W: 2.36,
  F: 2.23,
  G: 2.02,
  Y: 1.97,
  P: 1.93,
  B: 1.29,
  V: 0.98,
  K: 0.77,
  J: 0.15,
  X: 0.15,
  Q: 0.10,
  Z: 0.07,
};

export const VOWELS = ['A', 'E', 'I', 'O', 'U'];
export const CONSONANTS = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

const weightedLetters: string[] = [];

Object.entries(LETTER_FREQUENCY).forEach(([letter, frequency]) => {
  const count = Math.round(frequency * 10);
  for (let i = 0; i < count; i++) {
    weightedLetters.push(letter);
  }
});

export const getRandomLetter = (): string => {
  const randomIndex = Math.floor(Math.random() * weightedLetters.length);
  return weightedLetters[randomIndex];
};
