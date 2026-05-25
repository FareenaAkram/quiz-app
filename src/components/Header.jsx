import logoImg from "../assets/quiz-logo.png"
export default function Header({ startQuiz, setStartQuiz }) {
    return <header>
        <img src={logoImg} alt="Quiz Logo" />
        <h1>ReactQuiz</h1>
        {
            !startQuiz && (
                <button onClick={() => setStartQuiz(true)} className="start-quiz w-auto" style={{ width: 'auto' }}>Start Quiz</button>
            )
        }

    </header>
}