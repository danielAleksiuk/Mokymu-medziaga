import Row from './Row';

const Grid = ({currentGuess, guesses, turn}) => {
    return (
        <>
            {
                guesses.map((guess, index) => (
                    <>
                        {turn === index && <Row key={index} currentGuess={currentGuess}/>}
                        {turn !== index && <Row key={index} guess={guess}/>}
                    </>
                ))
            }
        </>
    )
}

export default Grid;