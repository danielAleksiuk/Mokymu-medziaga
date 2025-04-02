import { useState } from "react";

const Komp2 = () => {
    const [pirmas, setPirmas] = useState('');
    const [antras, setAntras] = useState('');


    const pirmasHandler = (event) => {
        setPirmas(event.target.value)
    }

    const antrasHandler = (event) => {
        setAntras(event.target.value)
    }

    const ilgesnis = () => {
        let result = pirmas.length - antras.length;

        if (result > 0) {
            return pirmas;
        } else if (result < 0) {
            return antras
        }

        return 'abu lygus'
    }
 
    return (
        <div>
            <h2>komp2</h2>

            <h4>Ilgesnis tekstas</h4>

            <div>
                <label htmlFor="pirmasInput">Pirmas</label>
                <input onChange={pirmasHandler} type="text" id="pirmasInput"/>
            </div>
            <div>
                <label htmlFor="antrasInput">Antras</label>
                <input onChange={antrasHandler} type="text" id="antrasInput"/>
            </div>

            <p>
                <strong>Ivesti zodziai:</strong>
                {pirmas} ir {antras}
            </p>

            <p>ilgesnis zodis yra : {ilgesnis()}</p>
        </div>
    )
};

export default Komp2;