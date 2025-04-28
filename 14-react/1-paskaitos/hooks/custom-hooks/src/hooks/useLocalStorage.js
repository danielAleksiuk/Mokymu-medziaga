import { useState } from "react";

const useLocalStorage = (key) => {
    const [storedValue, setStoredValue] = useState(() => {
        const reiksme = JSON.parse(localStorage.getItem(key));

        return reiksme || null;
    });


    const setValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue);
    }


    return [storedValue, setValue]
}

export default useLocalStorage;