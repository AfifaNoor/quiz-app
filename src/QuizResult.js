import React from 'react';

function QuizResult(props) {
  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '40px',
    border: '2px solid #007bff',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const resultStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '30px',
  };

  const scoreStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h2 style={resultStyle}>Quiz Completed!</h2>
      <p style={scoreStyle}>Your Score: {props.score} / {props.totalScore}</p>
      <button style={buttonStyle} onClick={props.tryAgain}>Try Again</button>
    </div>
  );
}

export default QuizResult;
