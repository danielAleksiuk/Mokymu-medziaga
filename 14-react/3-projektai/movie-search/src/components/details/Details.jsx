import { useEffect, useState } from "react";

const API_URL = 'https://www.omdbapi.com'
const API_KEY = 'apikey=a2526df0';


const Details = ({id, handleClose}) => {
    const [movie, setMovie] = useState();


    useEffect(() => {
        const getData = () => {
            const url = `${API_URL}/?${API_KEY}&i=${id}`;

            fetch(url)
                .then(response => response.json())
                .then(data => console.log(data));
        }
        
        getData();


    }, [id])

    return (
        <>
            details
        </>
    )
};

export default Details;