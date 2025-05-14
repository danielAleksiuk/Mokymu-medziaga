import { useEffect, useState } from "react";
import {  Button, Modal } from "react-bootstrap";
const API_URL = 'https://www.omdbapi.com'
const API_KEY = 'apikey=a2526df0';


const Details = ({id, handleClose, isLoading}) => {
    const [movie, setMovie] = useState();


    useEffect(() => {
        const getData = () => {

            setTimeout(() => {
                const url = `${API_URL}/?${API_KEY}&i=${id}`;

                fetch(url)
                    .then(response => response.json())
                    .then(data => setMovie(data))
                    .finally(() => isLoading(false))
            }, 1000)
            
        }
        
        getData();


    }, [id])

    

    return (
        <>
            {
                movie && (
                    <Modal show={movie} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{movie.Title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Woohoo, you are reading this text in a modal!
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal> 
                )
            }
        </>
        
    )
};

export default Details;