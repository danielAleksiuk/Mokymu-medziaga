import { suma, PI }  from "../utils/calculator"

const Komp1 = () => {
    let skaicius = 57;
    let pirmas = 5, antras = 6;

    const patikrinkSkaiciu = (skaiciukas) => {
        // if (skaiciukas === 55) {
        //     return 'skaicius yra 55'
        // } else {
        //     return 'skaicius nera 55'
        // };

        return skaiciukas === 55 ? 'skaicius yra 55' : 'skaicius nera 55'
    }

    return (
        <div>
            <h2>skaiciai ir skaiciavimai</h2>
            <p>{skaicius}</p>
            <p>{skaicius + 5 }</p>
            <p>{skaicius - 5 }</p>
            <p>{skaicius * 5 }</p>
            <p>{skaicius / 5 }</p>
            <p>{ patikrinkSkaiciu(skaicius) }</p>
            <p>{ suma(pirmas, antras)}</p>
            <p>{PI}</p>

        </div>
    )
};


export default Komp1;





// const Komp1 = () => {
//     return (
//         <div>
//             komp1
//         </div>
//     )
// };


// export default Komp1;