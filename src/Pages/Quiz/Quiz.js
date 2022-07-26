import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './Quiz.css'
import Questions from '../../Components /Questions/Questions.js';

const Quiz = ({ name, questions, setQuestions, score, setScore }) => {
    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
      setOptions(
        questions &&
          handleShuffle([
            questions[currentQuestion]?.correct_answer,
            ...questions[currentQuestion]?.incorrect_answers,
          ])
      );
    }, [questions, currentQuestion]);

    const handleShuffle = (options) => {
      return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className='quiz'>
      <span className='titlee'>
        Hey, {name}
      </span>
      {questions ? (<>
        <div className='category'>
          <span>
            {questions[currentQuestion].category}
          </span>
        </div>
        <Questions
          currentQuestion={currentQuestion}
          options={options}
          setCurrentQuestion={setCurrentQuestion}
          questions={questions}
          setQuestions={setQuestions}
          correct={questions[currentQuestion]?.correct_answer}
          score={score}
          setScore={setScore}
        />
      </>) : (
        <CircularProgress 
        style={{margin:100}}
        thickness={1}
        size={100}
        color='inherit'
        />
      )}
    </div>

  )
}

export default Quiz