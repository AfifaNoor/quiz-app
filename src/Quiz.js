import React, { useState } from 'react';
import { QuizData } from './QuizData';
import QuizResult from './Images/QuizResult';

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

    return (
        <div>
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
            ) : (
                <div>
                    <div>
                        Question <span>{currentQuestion + 1}. </span>
                        <span>{QuizData[currentQuestion].question}</span>
                    </div>
                    <div>
                        Options:
                        {QuizData[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedOption(index + 1)}
                                style={
                                    selectedOption === index + 1 ? { backgroundColor: 'lightgreen' } : {}
                                }
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button onClick={changeQuestion}>Next</button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
