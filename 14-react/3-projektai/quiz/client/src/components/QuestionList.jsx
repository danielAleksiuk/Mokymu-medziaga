import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const QuestionList = ({ questions, current, handleAnswerQuestion,handleNextQuestion }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const optionsIds = ['a', 'b', 'c', 'd'];
    
    const handleOptionClick = (option) => {

    };
    
    return (
        <Container>
            <p>time remaining</p>
            <h3>{questions[current].question}</h3>
            <div className="list-group">
                { questions[current].options.map((option, index) => (
                    <Button key={index}>
                        {option.value}
                    </Button>
                 ))}
            </div>
            <Row>
                <Col>
                    Question {current + 1 } of {questions.length} 
                </Col>
                <Col>
                    <Button onClick={handleNextQuestion}>Next Question</Button>
                </Col>
            </Row>




        </Container>
    )
}

export default QuestionList;