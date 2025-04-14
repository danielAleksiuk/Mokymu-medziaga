import { useState } from "react";
import { useEffect } from "react";

const Komp1 = () => {
    const [count, setCount] = useState(0);
    const [zodis, setZodis] = useState('zodis')

    useEffect(() => {
        console.log('useEffect: komp1 mounted')
    }, []);

    useEffect(() => {
        console.log('useEffect: komp1 mounted OR updated')
    });

    useEffect(() => {
        console.log('useEffect: count value is changed');
        if (count > 5 ) {
            setCount(0);
        }
    }, [count])

    useEffect(() => {
        console.log('useEffect: count and zodis');
        if (zodis === 'word') {
            setZodis('zodis 3')
        }
    }, [count, zodis]);

    // unmount

    useEffect(() => { 
        return () => {
            console.log('unmount')
    }}, [])


    const handleClick = () => {
        console.log('click')
        setCount(  count + 1)
        setZodis('word')
    }

    return (
        <div>
            <h2>komp1</h2>
            <button onClick={handleClick}>click me</button>
            <p>{ count }</p>
            <p>{ zodis }</p>
        </div>
 )
}

export default Komp1;