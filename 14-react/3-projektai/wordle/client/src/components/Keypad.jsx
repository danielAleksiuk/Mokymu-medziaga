import { useEffect, useState } from "react";

const API_URL = 'http://localhost:3000/letters';

const Keypad = ({usedKeys}) => {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(json => setLetters(json));
    }, []);

    return (
        <div className="keypad">
            {
                letters && letters.length > 0 && letters.map(letter => {
                    const color = usedKeys[letter.key]

                    return (
                        <div key={letter.key} className={color}>{letter.key}</div>
                    )
                })  
            }
        </div>
    )
};

export default Keypad;