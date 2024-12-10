import React, { useState } from 'react';

const QuizApp = () => {
  const questions = [
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    { question: 'What is the capital of France?', options: ['Paris', 'Berlin', 'Madrid'], answer: 'Paris' },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selected: string) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <h2>Quiz App</h2>
      {showScore ? (
        <p>Your score: {score}/{questions.length}</p>
      ) : (
        <div>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
