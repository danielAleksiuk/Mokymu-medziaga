import { useState } from "react";

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    const formatGuess = () => {
        // let solutionArray = [...solution];

        // // foreach -> map
        // const formattedGuess = [...currentGuess]
        //     .map((letter, index) => {
        //         return {key:letter, color: 'grey'}
        //     });
        
        
        // formattedGuess.forEach((letter, index) => {
        //     if (solutionArray[index] === letter.key) {
        //         formattedGuess[index].color = 'green';
        //         solutionArray[index] = null;
        //     }

        //     if (solutionArray.includes(letter.key) && letter.color !== 'green') {
        //         formattedGuess[index].color = 'yellow';
        //         solutionArray[solutionArray.indexOf(letter.key)] = null;
        //     }
        // });

    //     solutionArray = [...solution]

    //     const newFormattedGuessViktorija =  [...currentGuess].map((letter, index) => {
    //         const letterObj = { key: letter, color: 'grey' };
            
    //         if (solutionArray[index] === letter) {
    //             solutionArray[index] = null;
    //             letterObj.color = 'green';
    //         } else if (solutionArray.includes(letter)) {
    //             solutionArray[solutionArray.indexOf(letter)] = null;
    //             letterObj.color = 'yellow';
    //         } else {
    //             letterObj.color = 'grey';
    //         }

    //         return letterObj;
    //     });




    //    solutionArray = [...solution]
    //     const formattedGuessEdgaras1 = [...currentGuess].map((letter, index) => ({
    //         key: letter,
    //         color: 
    //             solutionArray[index] === letter
    //             ? (solutionArray[index] = null, 'green')
    //             : solutionArray.includes(letter)
    //                 ? (solutionArray[solutionArray.indexOf(letter)] = null, 'yellow')
    //                 : 'grey'
    //         }));


    //            solutionArray = [...solution]
    //     const formattedGuessEdgaras2 = [...currentGuess].map((letter, index) => {
    //         const formattedLetter = { key: letter, color: 'grey' };
            
    //         if (solutionArray[index] === letter) {
    //             formattedLetter.color = 'green';
    //             solutionArray[index] = null;
    //         } else if (solutionArray.includes(letter)) {
    //             formattedLetter.color = 'yellow';
    //             solutionArray[solutionArray.indexOf(letter)] = null;
    //         }
            
    //         return formattedLetter;
    //         });



    //          solutionArray = [...solution]
    //         const formattedGuess3 = [...currentGuess].map((letter, index) => {
    //             const isExactMatch = solutionArray[index] === letter;
    //             const isPartialMatch = !isExactMatch && solutionArray.includes(letter);

    //             return {
    //                 key: letter,
    //                 color: isExactMatch ? 'green' : isPartialMatch ? 'yellow' : 'grey'
    //             };
    //             });

        
    //     let solutionCopy = [...solution];
    //     const formattedGuessRimas = [...currentGuess].map((letter, index) => {
    //         let color = 'grey';
    //         if (solutionCopy[index] === letter) {
    //             color = 'green';
    //             solutionCopy[index] = null;
    //         } else if (solutionCopy.includes(letter)) {
    //             color = 'yellow';
    //             solutionCopy[solutionCopy.indexOf(letter)] = null;
    //         }
    //         return { key: letter, color };
    //     });
    

    //     console.log('++++++++++++++++++++++');
    //     console.log(formattedGuess);
    //     console.log(newFormattedGuessViktorija);
    //     console.log(formattedGuessEdgaras1);
    //     console.log(formattedGuessEdgaras2);
    //     console.log(formattedGuess3);
    //     console.log(formattedGuessRimas)
    //     console.log('++++++++++++++++++++++');
        let solutionCopy = [...solution];
        const formattedGuess = [...currentGuess].map((letter, index) => {
            let color = 'grey';
            if (solutionCopy[index] === letter) {
                color = 'green';
                solutionCopy[index] = null;
            } else if (solutionCopy.includes(letter)) {
                color = 'yellow';
                solutionCopy[solutionCopy.indexOf(letter)] = null;
            }
            return { key: letter, color };
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
        setUsedKeys((prev) => {
            let newKeys = {...prev};

            formattedGuess.forEach((letter) => {
                newKeys[letter.key] = letter.color;
            })
            
            return newKeys;
        })
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
            addNewGuess(formatted);
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


    return ({turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup})
};

export default useWordle;