import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
    const [startQuiz, setStartQuiz]=useState(null);
    return (
        <>
        <Header startQuiz={startQuiz} setStartQuiz={setStartQuiz}></Header>
        

        {startQuiz  &&(
        <main id="quiz">
            <Quiz></Quiz>
        </main>
        )
            
        }
        
        
        </>
        

    )
}

export default App;
