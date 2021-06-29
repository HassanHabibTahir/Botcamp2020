import React, { useState } from "react";
import "./App.css";
import { Difficulty, QuestionsStates } from "./utils/type";
import { QuestionsTypes } from "./Api";
import CardComponent from "./views/Card";
const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [question, setQuestions] = React.useState<QuestionsStates[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState<string>();
  const [option, setOption] = useState<string>("easy");

  // async function Results() {
  //   const newQuestions = await QuestionsTypes(10, Difficulty.EASY);
  //   return newQuestions;
  // }

  React.useEffect(() => {
    (async function Results() {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await QuestionsTypes(
        TOTAL_QUESTIONS,
        // Difficulty.EASY
        option
      );
      setQuestions(newQuestions);
    })();
  }, [option]);

  const nextQuestion = async (e: any) => {
    //move on to the next question if not the last qustion
    e.preventDefault();
    // setAnswer(null);
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      // setGameOver(true);
    } else {
      setAnswer("");
      setNumber(nextQuestion);
    }
  };

  // const checkAnswer = () => {};

  const handleBack = (e: any) => {
    setAnswer(e.target.value);
    let userAnswer = e.target.value;
    const correct = question[number].correct_answer === userAnswer;
    if (correct) setScore((prev) => prev + 1);
  };

  const SellectValue = (e: React.FormEvent) => {
    let val = (e.target as any).value;
    setOption(val);
  };

  console.log(option, "option");
  return (
    <div className="QuizeApp">
      {/* {number + 1 != TOTAL_QUESTIONS ? ( */}
      <div>
        <h1>REACAT QUIZ APP</h1>
        <select onChange={SellectValue}>
          <option value="easy">EASY</option>
          <option value="medium">MEDIUM</option>
          <option value="hard">HARD</option>
        </select>
        <h1>Question Numbre {number + 1}</h1>
        {number + 1 == TOTAL_QUESTIONS ? (
          <h1>
            Result {score}/{TOTAL_QUESTIONS}
          </h1>
        ) : null}
        <CardComponent
          questionNor={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={question[number]?.question}
          answers={question[number]?.answers}
          callback={handleBack}
          answerE={answer}
        />
        <form onSubmit={nextQuestion}>
          {number + 1 != TOTAL_QUESTIONS ? (
            <button className="next_que" type="submit">
              Next Question
            </button>
          ) : null}
        </form>
      </div>
    </div>
  );

  // const checkAnswer = (e: any) => {
  //   if (!gameOver) {
  //     // User's answer
  //     const answer = e.currentTarget.value;
  //     // Check answer against correct answer
  //     const correct = questions[number].correct_answer === answer;
  //     // Add score if answer is correct
  //     if (correct) setScore((prev) => prev + 1);
  //     // Save the answer in the array for user answers
  //     const answerObject = {
  //       question: questions[number].question,
  //       answer,
  //       correct,
  //       correctAnswer: questions[number].correct_answer,
  //     };
  //     setUserAnswers((prev) => [...prev, answerObject]);
  //   }
  // };
}

export default App;
