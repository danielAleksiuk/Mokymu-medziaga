import useLocalStorage from "../hooks/useLocalStorage";

const Komp4 = () => {
    const [storedValue, setValue] = useLocalStorage('kursas is custom hooks')

    const addDataWithoutHook = () => {
        localStorage.setItem('kursas', 'react mokymai');
        window.localStorage.setItem('kursas-window', 'react mokymai');
    }

    const addDataWithHook = () => {
        // setValue('react - mokymai is custom hooks');
        setValue({
            vardas: 'jonas',
            role: 'admin'
        })
    }

    const duokManReiksmeIsLocalStorage = () => {
        console.log(storedValue)
        if (typeof storedValue === 'object') {
            return 'objektas'
        }

        return storedValue ? storedValue : 'duomenu nera';
    }

    return (
        <div>
            <h3>local storage pvz</h3>
            <button onClick={addDataWithoutHook}>add data without hook</button>
            <button onClick={addDataWithHook}>add data with hook</button>
            <p>{duokManReiksmeIsLocalStorage()}</p>
        </div>
    )
}

export default Komp4;