import React, { useState } from "react";

type Props = {
  questionNor?: number;
  totalQuestions?: number;
  question?: string;
  answers?: string[];
  callback?: any;
  answerE?: string;
};

const CardComponent: React.FC<Props> = ({
  questionNor,
  totalQuestions,
  question,
  answers,
  callback,
  answerE,
}) => {
  // console.log(questionNor, totalQuestions, question, answers, "card");
  const [selectValue, setselectValue] = useState<string>("");
  // const HandleCheck = (e: any) => {
  //   console.log(e.target.value);
  // };

  return (
    <div className="cards_Element">
      <div>
        <div className="qustions_elements">
          <p>{question}</p>{" "}
        </div>
        <ul style={{ textAlign: "center", margin: "auto" }}>
          <form>
            {answers?.map((answer: string) => {
              return (
                <div>
                  <label style={{}}>
                    <input
                      type="radio"
                      name="answer"
                      onChange={callback}
                      checked={answerE === answer}
                      // onChange={callback}
                      value={answer}
                    />
                    {answer}
                  </label>
                </div>
              );
            })}
          </form>
        </ul>
      </div>
    </div>
  );
};

export default CardComponent;
