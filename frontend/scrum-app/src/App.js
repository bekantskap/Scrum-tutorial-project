import './App.css';
import Navbar from './Components/Navbar';
import Guide from './Pages/Guide';
import { Router, Routes, Route } from 'react-router-dom';
import Quiz from './Pages/Quiz';
import React, { createContext, useEffect, useState } from 'react';

export const QuizContext = createContext();

function App() {
  const [quizList, setQuizList] = useState([]);

  const url = 'http://localhost:5500/quiz.json';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setQuizList(data));
  }, []);

  const providerValue = React.useMemo(
    () => ({
      quizList,
      setQuizList,
    }),
    [quizList, setQuizList]
  );

  return (
    <QuizContext.Provider value={providerValue}>
      <main className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Guide />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
      </main>
    </QuizContext.Provider>
  );
}

export default App;
