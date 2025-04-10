import { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";

const ZodziuBendras = () => {
    const [zodziai, setZodziai] = useState([]);

    const pridetiZodiValdyklis = (naujasZodis) => {
        // setZodziai([...zodziai, naujasZodis]);
        setZodziai(prev => [...prev, naujasZodis]);
    }

    const ilgiausiasZodis = () => {
        let didZiausiasZodis = {
            index: 0,
            ilgis: zodziai[0].length
        };

        for(let i = 1; i < zodziai.length; i++) {
            if (didZiausiasZodis.ilgis < zodziai[i].length) {
                didZiausiasZodis = {
                    index: i,
                    ilgis: zodziai[i].length
                };
            }
        }

        return zodziai[didZiausiasZodis.index]
    }

    return (
        <div>
            <h2>ZodziuBendras</h2>
            {
                zodziai.length > 0 && (
                    <>
                        <p>ilgiausias zodis yra: <strong>{ilgiausiasZodis()}</strong></p>
                        <ul>
                            {
                                zodziai.map((zodis, index) => <li key={index}>{zodis}</li>)
                            }
                        </ul>
                    </>
                )
            }

            {
                zodziai.length === 0 && (
                    <p>Deja, nera ivestos informacijos</p>
                )
            }

            <ZodziuIvedimas 
                pridetiZodi={pridetiZodiValdyklis}/>
        </div>
    )
}

export default ZodziuBendras;