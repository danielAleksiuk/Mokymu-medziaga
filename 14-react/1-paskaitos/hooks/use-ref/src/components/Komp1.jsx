import { useState, useRef } from "react";

const Komp1 = () => {
    const [salis, setSalis] = useState('');
    const salisInputRef = useRef();


    const onIvestiClick = () => {
        setSalis(salisInputRef.current.value);
    }

    return (
        <div>
            <h2>komp vienas</h2>

            <h4>megstamiausia salis</h4>
            <div>
                <label htmlFor="salis">Iveskite sali</label>
                <input ref={salisInputRef} type="text" id="salis"/>
                <button onClick={onIvestiClick}>ivesti</button>
            </div>
            <p>Jus ivedete: {salis}</p>
        </div>
    )
};


export default Komp1;