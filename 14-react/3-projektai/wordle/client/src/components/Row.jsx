const Row = ({guess}) => {
    return (
        <>
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