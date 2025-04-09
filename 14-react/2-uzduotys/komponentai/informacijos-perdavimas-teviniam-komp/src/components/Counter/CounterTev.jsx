import { useState } from "react";
import CounterMygtukai from "./CounterMygtukai";

const CounterTev = () => {
    const [paspaudimai, setPaspaudimai] = useState(0);
    const counterButtons = [
        { value: 1, text: '+1' },
        { value: 2, text: '+2' },
        { value: 3, text: '+3' },
        { value: 5, text: '+5' }
    ];

    const valueHandler = (value) => {
        setPaspaudimai(paspaudimai + value)
    }

    return (
        <div>
            <h1>CounterTEV</h1>
            <p>{paspaudimai}</p>
            <CounterMygtukai addValue={valueHandler}/>
        </div>
    )
}

export default CounterTev;