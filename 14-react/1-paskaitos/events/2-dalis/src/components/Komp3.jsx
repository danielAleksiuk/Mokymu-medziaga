const Komp3 = () => {
    let zodis = 'azuolas';

    const inputHandler = (e) => {
        let ivestasZodis = e.target.value;

        if (zodis === ivestasZodis) {
            console.log('bam , atspejai');
        } else {
            console.log('bandyk dar karta');
        }
    }


    return (
        <div>
            <h2>komp3</h2>
            <input type="text" onChange={inputHandler}/>
        </div>
    )
}

export default Komp3;