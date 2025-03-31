const Komp3 = () => {
    const mygtukasHandler = () => {
        console.log('clicked button');
    }


    return (
        <div>
            <h4>Komp3</h4>

            <button onClick={  mygtukasHandler }>mygtukas</button>
            <button>kitas mygt</button>
            <button> dar vienas buttonas </button>
        </div>
    )
}

export default Komp3;