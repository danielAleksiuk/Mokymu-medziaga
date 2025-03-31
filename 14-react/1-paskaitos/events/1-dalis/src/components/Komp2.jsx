const Komp2 = () => {
    const spaudziam = () => {
        alert('pauspadziau')
    }

    return (
        <div>
            <h4>Komp2</h4>
            <button onClick={ () => spaudziam() }>
                Spausti cia
            </button>
            
        </div>
    )
};

export default Komp2;