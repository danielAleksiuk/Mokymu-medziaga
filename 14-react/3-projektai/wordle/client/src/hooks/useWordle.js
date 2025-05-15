import { useState } from "react";

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        const solutionArray = [...solution];

        // foreach -> map
        const formattedGuess = [...currentGuess]
            .map((letter) => {
                return {key:letter, color: 'grey'}
            });
        
        
        formattedGuess.forEach((letter, index) => {
            if (solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green';
                solutionArray[index] = null;
            }

            if (solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow';
                solutionArray[solutionArray.indexOf(letter.key)] = null;
            }
        });

        return formattedGuess;
    }

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }

        setGuesses((prev) => {
            const newGuesses = [...prev];
            newGuesses[turn] = formattedGuess;

            return newGuesses;
        });

        setHistory((prev) => [...prev, currentGuess]);
        setTurn((prev) => prev + 1);
        setCurrentGuess('');
    }

    const handleKeyup = ({key}) => {
        if (key === 'Enter') {
            if (
                turn > 5 ||
                history.includes(currentGuess) ||
                currentGuess.length !== 5
            ) {
                return;
            }

            const formatted = formatGuess();
            console.log(formatted);
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1));

            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key);
            }
            return;
        }
    }


    return ({turn, currentGuess, guesses, isCorrect, handleKeyup})
};

export default useWordle;