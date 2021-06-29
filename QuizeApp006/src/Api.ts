import {
  Questions,
  QuestionsStates,
  Difficulty,
  shuffleArray,
} from "./utils/type";

export const QuestionsTypes = async (
  amount: number,
  // difficulty: Difficulty,
  option: string
): Promise<QuestionsStates[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${option}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Questions) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

// category: "Science: Computers"
// correct_answer: "Apple"
// difficulty: "easy"
// incorrect_answers: (3) ["Microsoft", "Atari", "Commodore"]
// question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?"
// type: "multiple"
