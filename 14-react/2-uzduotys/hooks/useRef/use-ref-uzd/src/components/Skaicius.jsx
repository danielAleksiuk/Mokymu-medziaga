import { useRef } from "react";
import { useState } from "react";

const Skaicius =  () => {
    const [skaicius, setSkaicius] = useState();
    const inputRef = useRef();

    const onIvestiClick = () => {
        setSkaicius(
            inputRef.current.valueAsNumber
        );

        inputRef.current.value = '';
    }

    const arLyginis = () => {
        return skaicius % 2 === 0 ? 'lyginis' : 'nelyginis';
    }

    return (
        <div>
            <h2>skaicius</h2>

            <input type="number" ref={inputRef}/>
            <button onClick={onIvestiClick}>ivesti skaiciu</button>

            {
                skaicius && 
                    <>
                         <p>{skaicius}</p>
                         <p>{arLyginis()}</p>
                    </>
            }
        </div>
    )
}

export default Skaicius;