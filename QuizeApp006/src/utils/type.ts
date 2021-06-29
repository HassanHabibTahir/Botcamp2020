export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export type Questions = {
  category: string;
  difficulty: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
};

export type QuestionsStates = Questions & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
