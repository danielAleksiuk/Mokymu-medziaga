import { useState } from "react"

const useInput = (initValue) => {
    const [value, setValue] = useState(initValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
} 

export default useInput;