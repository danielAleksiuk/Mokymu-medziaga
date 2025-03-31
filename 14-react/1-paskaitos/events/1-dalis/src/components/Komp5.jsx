const Komp5 = () => {
    const pirmasHandler = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.textContent)
    }

    return (
        <div>
            <h4>Komp5</h4>
            <button onClick={pirmasHandler}>Pirmas <hr/> <strong>abc</strong> </button>
            <button onClick={pirmasHandler}>Antras</button>

            
        </div>
    )
};

export default Komp5;