import { useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";


// 1. sukurti forma 
//   title
//   reps
//   lygis

// 2. paspaudus mygtuka save 
//   siusti POST uzklausa 

// 3. jei uzklausa yra sekminga 
//   pereiti i home puslapi

// 4. jei uzklausa nesekminga
//   parodyti klaida - raudonomis raidemis


const CreateTask = () => {
    const [error, setError] = useState(null);
    const titleRef = useRef(null);
    const repsRef = useRef(null);
    const levelRef = useRef(null);
    const navigate = useNavigate();

    const onCreateButtonClick = async () => {
        if (titleRef.current.value && repsRef.current.value && levelRef.current.value) {
            const response = await fetch('http://localhost:4000/api/pratimai', {
                method: 'POST',
                body: JSON.stringify({
                    title: titleRef.current.value,
                    reps: repsRef.current.value,
                    level: levelRef.current.value
                }),
                headers: {'Content-Type': 'application/json'}
            });
            const data = await response.json();
            if (data.error) {
                setError(data.error.message);
                return ;
            }
            
            if (response.ok) {
                navigate('/')
            }
        }
    };

    return (
        <div className="taskCreateContainer">
            {error && <h2 className="errorMsg">{error}</h2>}
            <form>
                <label htmlFor="title">Pavadinimas:</label>
                <input ref={titleRef} type="text" name="title"/>

                <br/>

                <label htmlFor="reps">Pratimo pasikartojimai:</label>
                <input ref={repsRef} type="number" name="reps" />
                <br/>

                <label htmlFor="level">Lygis:</label>
                <input ref={levelRef} type="number" name="level" />
                <br/>

                <button type="button" onClick={onCreateButtonClick}>Sukurti nauja pratima</button>
            </form>
        </div>
    )
}

export default CreateTask;