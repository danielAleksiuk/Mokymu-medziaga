const Row = ({guess, currentGuess}) => {
    return (
        <>
            {
                currentGuess && (
                    <div className="row current">
                        {
                            currentGuess.split('').map((letter, index) => (
                                <div key={index} className="filled">
                                    {letter}
                                </div>
                            ))
                        }
                        {
                            [...Array(5 - currentGuess.split('').length)].map((_, index) => (
                                <div key={index}></div>
                            ))
                        }
                    </div>
                )
            }
            {
                guess && (
                    <div className="row past">
                        {
                            guess.map((letter, index) => (
                                <div
                                    key={index}
                                    className={letter.color}>
                                {letter.key}
                                </div>
                            ))
                        }
                    </div>
                )
            }

            { !guess && <div className="row">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }       
        </>
        
    )
};

export default Row;