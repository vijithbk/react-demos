import React from 'react'

const Result = ({ userAnswers, questions, resetQuiz }) => {
    const correctAnswers = userAnswers.filter(answer => answer).length
    return (
        <>
            <h2>Results</h2>
            <p>You answered {correctAnswers} out of {questions.length} questions</p>
            <ul className='results'>
                {
                    questions.map((question, index) => {
                        return (
                            <li key={index} data-correct={userAnswers[index]}>
                                Q{index + 1}. {question.question}
                                <ul className='resultOptions'>
                                    {
                                        question.answerOptions.map((option, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className={option.isCorrect === "true" ? 'correctOption' : 'wrongOption'}>
                                                        {option.text}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Result