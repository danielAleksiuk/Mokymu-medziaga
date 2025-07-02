import { useEffect, useState } from "react";

const Home = () => {
    const [pratimai, setPratimai] = useState(null);

    useEffect(() => {
        const getPratimai = async () => {
            const response = await fetch('http://localhost:4000/api/pratimai');
            const json = await response.json();

            if (response.ok) {
                setPratimai(json);
                console.log(json);
            }
        }

        getPratimai();
    }, [])

    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home;