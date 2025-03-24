const Diena = (props) => {

    const arDetisKepure = (temperatura) => {
        if (temperatura > 18) {
            return 'valioooooooo, kepures nereikia'
        } else {
            return 'lauke salta.... dekis kepure...'
        }
    }

    return (
        <div>
            <h3>Dienos Temperatura: {props.temp}</h3>
            <p>{arDetisKepure(props.temp)}</p>
        </div>
    )
}

export default Diena;