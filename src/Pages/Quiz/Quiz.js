import React, { useEffect, useState } from 'react'

function Quiz(name, score, setScore, questions, setQuestions) {
    const [options, setOptions] = useState([])
    const [currentQuestion, setCurrentQurstion] = useState(0)

    useEffect(()=>{
        console.log(questions)
        setOptions(questions && 
            handleShuffle([questions[currentQuestion]?.correct_answer,
                ...questions[currentQuestion]?.incorrect_answers
            ]))
    },[questions])

    
    const handleShuffle = (answers) => {
        return answers.sort(() => Math.random() - 0.5)
    }

  return (
    <div>Quiz</div>
  )
}

export default Quiz