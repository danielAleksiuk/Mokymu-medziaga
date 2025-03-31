const Automobilis = (props) => { //({gamintojas, modelis}) => {
    // let auto = props.auto;

    // let gamintojas = props.auto.gamintojas;
    // let modelis = props.auto.modelis;

    let {gamintojas, modelis } = props.auto;

    return (
        <div>
            <h2>Automobilis</h2>
            <h4>{gamintojas}: {modelis}</h4>
        </div>
    )
};

export default Automobilis;