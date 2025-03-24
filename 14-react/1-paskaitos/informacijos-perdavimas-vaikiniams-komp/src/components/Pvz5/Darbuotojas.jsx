const Darbuotojas = (props) => {
    console.log(props)
    let darb = props.darbuotojas;

    return (
        <div>
            <h3>vardas: {darb.vardas}, pavarde: {darb.pavarde}</h3>
            <p>amzius: {darb.amzius}</p>
            <p>pareigos: {darb.pareigos}</p>
            <p>alga: {darb.atlyginimas}</p>
        </div>
    )
}

export default Darbuotojas;