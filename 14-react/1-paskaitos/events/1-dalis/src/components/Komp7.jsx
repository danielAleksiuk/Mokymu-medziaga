
const Komp7 = () => {
    let skaiciukas = 33;
    const patikrintiHandler = () => {
        if ( skaiciukas > 10 ) {
            console.log('didesnis uz 10');
        } else {
            console.log('mazesnis aeba lygus 10')
        }
    };

    return (
        <div>
            <h4>Komp7</h4>
            <button onClick={ patikrintiHandler }>
                Patikrinti skaiciu
            </button>
        </div>
    )
};

export default Komp7;