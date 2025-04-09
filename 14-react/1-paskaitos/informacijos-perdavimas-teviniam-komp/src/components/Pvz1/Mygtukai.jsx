const Mygtukai = (props) => {

    const onClickButtonHandler = () => {
        console.log(props)
        console.log('onclick button event:' + props.buttonText)
        props.tevoKomponentoFunkcija(2000);
    }

    return (
        <>
            <h3>mygtukai</h3>
            <button onClick={onClickButtonHandler}>{props.buttonText}</button>
        </>
    )
}

export default Mygtukai;