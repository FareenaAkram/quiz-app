import { useMemo } from "react";
export default function Answer({activeQuestionIndex, isQuizComplete,handleSelectAnswer, shuffleQuestion}) {
    console.log(typeof(shuffleQuestion))
    const shuffleAnswers = useMemo(() => {
    return [...shuffleQuestion].sort(() => Math.random() - 0.5);
  }, [shuffleQuestion]);

  
 

    return (
        <>
           
            <ul id="answers">
                {shuffleAnswers.map((answer) => (

                    <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </>

    )
}
