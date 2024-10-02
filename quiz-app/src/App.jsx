import { useState } from 'react'

import Question from './components/question'
import questions from './data/questions.json'
import Result from './components/result'

import './App.css'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  console.log(userAnswers)


  const handleOptionSelection = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1)
    setUserAnswers([...userAnswers, isCorrect])
  }

  const resetQuiz = () => {

  }

  return (
    <div className='App'>
      <h1>Quiz</h1>
      {/* Questions component */}
      {
        currentQuestion < questions.length && (
          <Question question={questions[currentQuestion]} onAnswerClick={handleOptionSelection} />
        )
      }
      {/* Results component */}
      {
        currentQuestion === questions.length && (
          <Result userAnswers={userAnswers} questions={questions} resetQuiz={resetQuiz} />
        )
      }
    </div>
  )
}

export default App
