import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Komp1 = () => {
    const { data, loading, makeApiCall } = useFetch('https://api.ipify.org?format=json', 1500);
    const [ip, setIp] = useState(null);

    const getData = () => {
        makeApiCall();
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIp(data.ip));
    }

    return (
        <div>
            <h3>api pvz</h3>
            <button onClick={getData}>get ip data</button>
            <p>tavo ip yra: {ip}</p>
            <p>custom hooks - tavo ip yra: 
                { loading ? 'Loading data....' : data?.ip } 
            </p>
        </div>
    )
};

export default Komp1;