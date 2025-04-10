import { useRef } from "react";

const ZodziuIvedimas = (props) => {
    const inputRef = useRef();


    const submitHandle = (event) => {
        event.preventDefault();
        const inputValue = inputRef.current.value.trim();
        if (inputValue !== '') {
            props.pridetiZodi(inputValue);
            inputRef.current.value = '';
        }
    }

    return (
        <div>
            <h4>ivedimas</h4>
            <form onSubmit={submitHandle}>
                <input type="text" ref={inputRef}/>
                <button type="submit">add word</button>
            </form>
         
        </div>
    )
}

export default ZodziuIvedimas;