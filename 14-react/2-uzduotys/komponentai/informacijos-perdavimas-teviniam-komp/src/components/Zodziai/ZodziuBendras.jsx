import { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";

const ZodziuBendras = () => {
    const [zodziai, setZodziai] = useState([]);

    const pridetiZodiValdyklis = (naujasZodis) => {
        console.log('zodziuBendras: '+ naujasZodis);
    }

    return (
        <div>
            <h2>ZodziuBendras</h2>
            {
                zodziai.length > 0 && (
                    <ul>
                        {
                            zodziai.map((zodis, index) => <li key={index}>{zodis}</li>)
                        }
                    </ul>
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