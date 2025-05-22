import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState,useEffect } from 'react';
import { getData } from './utils/api';
import {Button, Container} from 'react-bootstrap';
import QuestionList from './components/QuestionList';
import Score from './components/Score';

const QUESTION_TIME = 5;

function App() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(QUESTION_TIME);
const [quizEnd, setQuizEnd] = useState(false);

  useEffect( () => {
      getData('/questions')
        .then(response => setQuestions(response));
  }, []);

  useEffect(() => {
    if (quizStarted) {
        const interval = setInterval(() => {
          setTimer(prev => {
            if (prev > 0) {
              return prev - 1;
            }
            
            if (currentQuestion === questions.length - 1 ) {
              setQuizStarted(false);
              setQuizEnd(true);
            } else {
              setCurrentQuestion(prev => prev + 1);
            }
            return QUESTION_TIME;
          })
        }, 1000);
        
        return () => clearInterval(interval);
      }
  }, [quizStarted, currentQuestion])

  const onStartButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizStarted(true);
    setQuizEnd(false);
  }

  const handleAnswerQuestion = (answerId) => {  
    if (answerId === questions[currentQuestion].answerId) {
      setScore(prev => prev + 1);
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1 ) {
      setQuizStarted(false);
      setQuizEnd(true);
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <Container>
      <h1>Vilnius coding school</h1>
      <h3>Quiz app</h3>
      <p>Start test</p>
      { (!quizStarted && !quizEnd)  && <Button onClick={onStartButtonClick}>Start</Button>}
      { quizStarted && <QuestionList
        timer={timer}
        questions={questions}
        current={currentQuestion}
        handleAnswerQuestion={handleAnswerQuestion}
        handleNextQuestion={handleNextQuestion} />}
      { quizEnd && <Score
        score={score}
        restartButtonClick={onStartButtonClick}/>}
    </Container>
  )
}


export default App
