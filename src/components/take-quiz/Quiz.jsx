// AxfPUzoOHhLgfkh9Eqaw5swzdF46fllW0wLp1UQW
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quiz.css'

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Function to fetch quiz questions
  const fetchQuestions = async () => {
    try {
      const response = await axios.get('https://quizapi.io/api/v1/questions', {
        headers: {
          'X-Api-Key': 'AxfPUzoOHhLgfkh9Eqaw5swzdF46fllW0wLp1UQW',
        },
        params: {
          limit: 10,
          category: 'Linux',
          difficulty: 'easy',
        },
      });
      setQuestions(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch questions. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Function to handle answer selection
  const handleAnswerSelection = (answer, isCorrect) => {
    setSelectedAnswer(answer);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  // Function to move to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  // Display loading or error messages
  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="quiz-container">
      {!showResults ? (
        <>
          <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="answers">
            {Object.entries(questions[currentQuestionIndex].answers).map(([key, answer]) => (
              answer && (
                <button
                  key={key}
                  onClick={() => handleAnswerSelection(key, questions[currentQuestionIndex].correct_answers[`${key}_correct`] === 'true')}
                  className={selectedAnswer === key ? 'selected' : ''}
                >
                  {answer}
                </button>
              )
            ))}
          </div>
          <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;



