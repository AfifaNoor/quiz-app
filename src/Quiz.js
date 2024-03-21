import React, { useState } from 'react';
import { QuizData } from './QuizData';
import QuizResult from './QuizResult';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (selectedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  };

  const questionContainerStyle = {
    marginBottom: '20px',
    fontSize: '1.2rem',
    color: '#333',
  };

  const questionNumberStyle = {
    fontWeight: 'bold',
    marginRight: '5px',
  };

  const optionsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  };

  const optionButtonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#e9ecef',
    color: '#495057',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '1rem',
  };

  const nextButtonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    fontSize: '1rem',
  };

  return (
    <div style={containerStyle}>
      {showResult ? (
        <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
      ) : (
        <div>
          <div style={questionContainerStyle}>
            <span style={questionNumberStyle}>Question {currentQuestion + 1}: </span>
            <span>{QuizData[currentQuestion].question}</span>
          </div>
          <div style={optionsContainerStyle}>
            {QuizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                style={{
                  ...optionButtonStyle,
                  ...(selectedOption === index + 1 && { backgroundColor: '#4caf50', color: '#fff' }),
                }}
                onClick={() => setSelectedOption(index + 1)}
              >
                {option}
              </button>
            ))}
          </div>
          <button style={nextButtonStyle} onClick={changeQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;