// const Preke = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h3>{props.pavadinimas}</h3>
//             <p>Prekyboje turime: <strong>{props.kiekis}</strong></p>
//             <p>Kaina: {props.kaina}</p>
//         </div>
//     )
// };

const Preke = ({pavadinimas, kiekis, kaina}) => {
    return (
        <div>
            be propsu
            <h3>{pavadinimas}</h3>
            <p>Prekyboje turime: <strong>{kiekis}</strong></p>
            <p>Kaina: {kaina}</p>
        </div>
    )
};

export default Preke;