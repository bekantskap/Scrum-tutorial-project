import { useContext } from 'react';
import { useState } from 'react';
import { QuizContext } from '../App.js';

export default function Quiz() {
  const q = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [winOrLoss, setWinOrLoss] = useState(false);

  // console.log(q.quizList[currentQuestion].question);

  function handleAnswerButtonClick(answer) {
    console.log(q.quizList[currentQuestion].correctAnswer);
    const nextQuestion = currentQuestion + 1;
    console.log(nextQuestion);
    if (nextQuestion < q.quizList.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    if (
      answer === q.quizList[currentQuestion].correctAnswer &&
      nextQuestion < q.quizList.length
    ) {
      setScore(score + 1);
    }

    if (nextQuestion === q.quizList.length) {
      console.log('finished');
      setHidden(true);
      if (score > q.quizList.length / 2) {
        setWinOrLoss(true);
      }
    }
  }
  console.log(hidden);

  return (
    <main className="quiz-container">
      <div className="quiz-box">
        <div className="quiz-content">
          <div className="question-count">
            <span>Fråga {currentQuestion + 1}</span>/{q.quizList.length}
          </div>
          <div className="quiz-counter">
            {showScore ? (
              <div className="score-section">
                Du fick {score} rätt av {q.quizList.length}
              </div>
            ) : (
              <p>{q.quizList.length - currentQuestion} frågor kvar</p>
            )}
          </div>
          <h2>{q.quizList[currentQuestion].question}</h2>

          <div className={`quiz-btns ${hidden ? 'hidden' : ''}`}>
            {q.quizList[currentQuestion].answers.map((answer, index) => (
              <button
                className="quiz-btn"
                key={index}
                onClick={() => handleAnswerButtonClick(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
          <div className={`quiz-score ${hidden ? '' : 'hidden'}`}>
            {winOrLoss ? (
              <p className="win-text">Grattis du klarade testet!!</p>
            ) : (
              <p className="win-text">Tyvärr klarade du inte provet...</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
