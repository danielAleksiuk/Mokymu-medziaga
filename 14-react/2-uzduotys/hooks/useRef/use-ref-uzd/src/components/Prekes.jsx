import { useState, useRef } from "react";

const Prekes = () => {
    const [prekes, setPrekes] = useState([]);
    const inputPavRef = useRef();
    const inputKiekisRef = useRef();
    const inputKainaRef = useRef();
    const MAZAS_KIEKIS = 5;

    const onFormSubmitHandler = (event) => {
        event.preventDefault();

        setPrekes([
            ...prekes,
            {
                pavadinimas: inputPavRef.current.value,
                kaina: inputKainaRef.current.valueAsNumber,
                kiekis: inputKiekisRef.current.valueAsNumber
            }
        ]);

        inputPavRef.current.value = null;
        inputKainaRef.current.value = null;
        inputKiekisRef.current.value = null;
    };

    const onClearClickHandler = () => {
        setPrekes([]);
    }

    const isveskMazaiKiekiuPrekiu = () => {
        const prekiuLikuciai = prekes.filter(preke => preke.kiekis < MAZAS_KIEKIS);

        return prekiuLikuciai.length > 0 ? (
            <div>
                <h3>prekiu likuciai</h3>
                {
                    prekiuLikuciai.map((preke, index) => (
                        <p key={index}>
                            pav: {preke.pavadinimas}, kaina: {preke.kaina}, kiekis: {preke.kiekis}
                        </p>
                    ))
                }
            </div>
        )
        : '';
    }

    return (
        <div>
            <h2>prekes</h2>
            <form onSubmit={onFormSubmitHandler}>
                <label htmlFor="inputPav">pavadinimas</label>
                <input id="inputPav" ref={inputPavRef} type="text"/>

                <label htmlFor="inputKaina">kaina</label>
                <input id="inputKaina" ref={inputKainaRef} type="number"/>

                <label htmlFor="inputKiekis">kiekis</label>
                <input id="inputKiekis" ref={inputKiekisRef} type="number"/>

                <button type="submit">prideti preke</button>
            </form>

            {
                prekes.length > 0 && (
                    <div>
                        {prekes.map((preke, index) => (
                            <p key={index}>
                                pav: {preke.pavadinimas}, kaina: {preke.kaina}, kiekis: {preke.kiekis}
                            </p>
                        ))}

                        {isveskMazaiKiekiuPrekiu()}

                        <button onClick={onClearClickHandler}>isvalyk mano prekiu krepseli</button>
                    </div>
                )
            }
            {
                prekes.length === 0 && (
                    <h3>
                        kol kas nėra įvestų prekių
                    </h3>
                )
            }
        </div>
    )
}

export default Prekes;