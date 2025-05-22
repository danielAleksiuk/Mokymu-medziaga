import { Button } from "react-bootstrap";

const Score = ({score, restartButtonClick}) => {
    return (
        <>
            <h2>Quiz completed</h2>
            <p>score: {score}</p>
            <Button onClick={restartButtonClick}>Restart quiz</Button>
        </>
    )
}

export default Score;


1 stilizuoti score
2 kada rodyti score 