export interface WordDefinition {
  word: string;
  phonetic?: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
    }[];
  }[];
}

export interface WordValidationResult {
  word: string;
  isValid: boolean;
  definition?: WordDefinition;
}

const DICTIONARY_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const wordCache = new Map<string, WordValidationResult>();

export const validateWord = async (word: string): Promise<WordValidationResult> => {
  const normalizedWord = word.toLowerCase().trim();

  if (normalizedWord.length < 2) {
    return { word: normalizedWord, isValid: false };
  }

  if (wordCache.has(normalizedWord)) {
    return wordCache.get(normalizedWord)!;
  }

  try {
    const response = await fetch(`${DICTIONARY_API_URL}/${normalizedWord}`);

    if (!response.ok) {
      const result = { word: normalizedWord, isValid: false };
      wordCache.set(normalizedWord, result);
      return result;
    }

    const data = await response.json();
    const definition: WordDefinition = data[0];

    const result: WordValidationResult = {
      word: normalizedWord,
      isValid: true,
      definition,
    };

    wordCache.set(normalizedWord, result);
    return result;
  } catch (error) {
    console.error('Error validating word:', error);
    const result = { word: normalizedWord, isValid: false };
    wordCache.set(normalizedWord, result);
    return result;
  }
};

export const validateWords = async (words: string[]): Promise<WordValidationResult[]> => {
  const promises = words.map(word => validateWord(word));
  return Promise.all(promises);
};

export const clearWordCache = () => {
  wordCache.clear();
};
