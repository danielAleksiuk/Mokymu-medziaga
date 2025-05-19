import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({solution}) => {
    const {currentGuess, handleKeyup, turn, guesses, usedKeys, isCorrect} = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener(
            'keyup',
            handleKeyup
        );
    }, [handleKeyup]);

    useEffect(() => {
        console.log(guesses, turn, isCorrect);
    }, [guesses, turn, isCorrect])

    return (
        <>
            <h3> current guess --- {currentGuess} </h3>
            <Grid 
                currentGuess={currentGuess} 
                guesses={guesses} 
                turn={turn}
            />
            <Keypad usedKeys={usedKeys}/>
        </>
        
    )
};

export default Wordle;