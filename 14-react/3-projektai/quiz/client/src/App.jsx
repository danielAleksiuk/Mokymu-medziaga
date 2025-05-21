import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState,useEffect } from 'react';
import { getData } from './utils/api';
import {Button, Container} from 'react-bootstrap';
import QuestionList from './components/QuestionList';
import { use } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


  useEffect( () => {
      getData('/questions')
        .then(response => setQuestions(response));

  }, []);

  const onStartButtonClick = () => {
    setQuizStarted(true);
  }

  const handleAnswerQuestion = () => {
    console.log('answer')
  }

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1 ) {
      setQuizStarted(false);
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <Container>
      <h1>Vilnius coding school</h1>
      <h3>Quiz app</h3>
      <p>Start test</p>
      { !quizStarted && <Button onClick={onStartButtonClick}>Start</Button>}
      { quizStarted && <QuestionList 
        questions={questions}
        current={currentQuestion}
        handleAnswerQuestion={handleAnswerQuestion}
        handleNextQuestion={handleNextQuestion} />}
    </Container>
  )
}


export default App
