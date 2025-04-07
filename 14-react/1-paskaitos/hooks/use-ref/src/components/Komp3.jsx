import { useRef } from "react";
import { useState } from "react";

const Komp3 = () => {
    const [pazymiai, setPazymiai] = useState([1,2,3]);
    const pazymisInputRef = useRef();

    const onPazymiaiSubmitHandler = (event) => {
        event.preventDefault();
        // alert('submit')/
        
        setPazymiai([...pazymiai, pazymisInputRef.current.valueAsNumber]);
        pazymisInputRef.current.value = ''
    }

    const vidurkis = () => {
        return pazymiai.reduce((prev, curr) => curr + prev, 0) / pazymiai.length;
    }

    return (
        <div>
            <h2>komp1</h2>
            <h4>studeno vidurkis:</h4>
            <form onSubmit={onPazymiaiSubmitHandler}>
                <label htmlFor="pazymys">iveskite pazymi</label>
                <input ref={pazymisInputRef} type="number" min="1" max="10" />
                <button type="submit">ivesti</button>
            </form>
            <div>
                <h4>ivesti pazymiai</h4>
                <p> {pazymiai.join(', ')} </p>
                <p>{vidurkis()}</p>
            </div>

        </div>

    )
};


export default Komp3;