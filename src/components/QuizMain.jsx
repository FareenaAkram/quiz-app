import Answer from "./Answer";
import QuizProgress from "./QuizProgress";
import questions from "../questions";
import { useState } from "react"

export default function QuizMain({ activeQuestionIndex,handleSkipAnswer, handleSelectAnswer}){
    
    //    const isQuizComplete = activeQuestionIndex === questions.length;
        if (activeQuestionIndex >= questions.length) {
    return null;
  }
      
    
       
       
    return(
        <>
        <QuizProgress  timeout={10000} onTimeout={handleSkipAnswer}
        //  onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} 
        >
                 
        </QuizProgress>
                 <h2>{questions[activeQuestionIndex].text}</h2>
            <Answer
            
        
            handleSelectAnswer={handleSelectAnswer}
            shuffleQuestion={[...questions[activeQuestionIndex].answers]}
            >

            </Answer>
        </>
    )
}
