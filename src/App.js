import './App.css';
import Header from './Components /Header/Header.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home.js'
import Quiz from './Pages/Quiz/Quiz.js'
import Result from './Pages/Result/Result.js'
import { useState } from 'react';
import axios from 'axios'


function App() {
  const [name, setName] = useState('')
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)

  const fetchQuestions = async(category = "", difficulty = "") =>{
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  );
  console.log(data.results)
  setQuestions(data.results)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home 
            name={name} 
            setName={setName}
            fetchQuestions={fetchQuestions}
          />}
          />
          <Route path="/quiz" element={<Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
          />}/>
          <Route path="/result" element={<Result
            name={name}
            score={score}
          />}/>
        </Routes>
        <img src="/quiz.svg" className="banner" alt="quiz app" />
      </div>
    </BrowserRouter>
  );
}

export default App;
