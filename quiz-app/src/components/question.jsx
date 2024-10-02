import React from 'react'

const Question = ({ question, onAnswerClick }) => {
    return (
        <div className='questions'>
            <h2>{question.question}</h2>
            <ul className='options'>
                {question && question.answerOptions.map(option => {
                    return (
                        <button onClick={() => onAnswerClick(option.isCorrect)}>{option.text}</button>
                    )
                })}
            </ul>
        </div>
    )
}

export default Question