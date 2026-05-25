import { useState, useCallback } from "react"
import questions from "../questions";

import Summary from "./Summary";
import QuizMain from "./QuizMain";

export default function Quiz() {


    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = activeQuestionIndex === questions.length;

 const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );


    return (
        <>


            {isQuizComplete ? (

                <Summary userAnswers={userAnswers} ></Summary>
            ) : (
                <>
                    <button onClick={() => handleSkipAnswer()} className="skip-question" style={{ width: 'auto' }}>Skip Question</button>

                    <div id="question">

                        <QuizMain
                            activeQuestionIndex={activeQuestionIndex}
                           key={activeQuestionIndex}
                         
                            handleSelectAnswer={handleSelectAnswer}
                            handleSkipAnswer={handleSkipAnswer}
                            ></QuizMain>
                    </div>
                </>
            )}

        </>
    )

}