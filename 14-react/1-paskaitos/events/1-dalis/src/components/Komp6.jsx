const Komp6 = () => {
    const slaptasSkHandler = () => {
        let slaptasSk = Math.floor(Math.random() * 10 );
        console.log(slaptasSk)
    }

    return (
        <div>
            <h4>Komp6</h4>
            <button onClick={ slaptasSkHandler }>
                Slaptas skaicius
            </button>
        </div>
    )
};

export default Komp6;