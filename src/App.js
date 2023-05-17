import React, { useState, useEffect } from 'react';

const questionsData = [
  {
    Question: 'Question 1',
    Options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    CorrectAnswer: 'Option 1',
  },
  {
    Question: 'Question 2',
    Options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    CorrectAnswer: 'Option 2',
  },
  {
    Question: 'Question 3',
    Options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    CorrectAnswer: 'Option 3',
  },
  {
    Question: 'Question 4',
    Options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    CorrectAnswer: 'Option 4',
  },
  {
    Question: 'Question 5',
    Options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    CorrectAnswer: 'Option 1',
  },
  // Add more questions here
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (isStarted && !isSubmitted) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isSubmitted]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleStartQuiz = () => {
    setIsStarted(true);
  };

  const handleNextQuestion = () => {
    const correctAnswer = questionsData[currentQuestion].CorrectAnswer;
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 2);
    }

    setSelectedOption('');

    if (currentQuestion === questionsData.length - 1) {
      setIsSubmitted(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleSubmitTest = () => {
    const correctAnswer = questionsData[currentQuestion].CorrectAnswer;
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 2);
    }

    setIsSubmitted(true);
  };

  const handleRestartTest = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setIsSubmitted(false);
    setIsPassed(false);
    setIsStarted(false);
    setTime(10 * 60);
  };

  useEffect(() => {
    if (isSubmitted) {
      if (score >= 12) {
        setIsPassed(true);
      }
    }
  }, [isSubmitted, score]);

  const renderQuestion = () => {
    if (isSubmitted) {
      return (
        <div>
          <h2>Test Result</h2>
          <p>Your score: {score} out of {questionsData.length * 2}</p>
          {isPassed ? (
            <p>Congratulations! You passed the test!</p>
          ) : (
            <button onClick={handleRestartTest}>Restart Test</button>
          )}
        </div>
      );
    }

    const question = questionsData[currentQuestion];

    return (
      <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p>{question.Question}</p>
        <div>
          {question.Options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option${index}`}
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <button onClick={currentQuestion === questionsData.length - 1 ? handleSubmitTest : handleNextQuestion}>
          {currentQuestion === questionsData.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    );
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Test</h1>
      {!isStarted ? (
        <button onClick={handleStartQuiz}>Start Quiz</button>
      ) : (
        <div>
          {renderQuestion()}
          <p>Time remaining: {formatTime(time)}</p>
          {time === 0 && !isSubmitted && (
            <div>
              <p>Time's up! Test submitted automatically.</p>
              {renderQuestion()}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;