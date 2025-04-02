import { useState } from "react";

const Komp3 = () => {
    const [masyvas, setMasyvas] = useState([]);
    const [objektas, setObjektas] = useState({vardas: 'jonas', amzius: 40})

    const onShowButtonClickHandler= () => {
        console.log(masyvas);
    }

    const onAddButtonClickHandler = () => {
        // masyvas.push(
        //     Math.round(Math.random())
        // );

        setMasyvas(
            [
                ...masyvas,
                Math.round(Math.random())
            ]
        )
    }

    return (
        <div>
            <h2>komp3</h2>
            <div>{masyvas}</div>
            <button onClick={onShowButtonClickHandler}>show array</button>
            <div>
                <button onClick={onAddButtonClickHandler}>add vlaue into array</button>
            </div>
        </div>
    )
};

export default Komp3;