import { useEffect, useState } from "react";
import type { Task } from "../utils/types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';

const Home = () => {
    const [pratimai, setPratimai] = useState<Task[]>([]);
    const [pratimoDetails, setPratimoDetails] = useState<Task>();

    useEffect(() => {
       
        getPratimai();
    }, []);

    const getPratimai = async () => {
        const response = await fetch('http://localhost:4000/api/pratimai');
        const json = await response.json();

        if (response.ok) {
            setPratimai(json);
            console.log(json);
        }
    }

    const [show, setShow] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [error, setError] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const openDetails = async (id: string) => {
        const response = await fetch('http://localhost:4000/api/pratimai/' + id );
        const pratimasDetails = await response.json();

        if (pratimasDetails.error) {
            setError(pratimasDetails.error);
            setShowToast(true);
            return;
        }

        if (response.ok) {
            setPratimoDetails(pratimasDetails)
            handleShow();
        }
    }

    const onDeleteTaskClick = async (id: string) => {
        console.log(id);
        const response = await fetch('http://localhost:4000/api/pratimai/' + id, {method: 'DELETE'} );
        const responseDetails = await response.json();
        console.log(responseDetails)

        setShow(false);
        getPratimai();
    }

    return (
        <>
            <h1>Mano pratimai</h1>
            {   pratimai.length > 0 && (
                 <table className="tasksTable">
                    <thead>
                        <tr>
                            <th>Pavadinimas</th>
                            <th>Pratimo pasikartojimai</th>
                            <th>Lygis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pratimai.map(pratimas => 
                            <tr key={pratimas._id}>
                                <td><a onClick={() => openDetails(pratimas._id)}>{pratimas.title}</a></td>
                                <td>{pratimas.reps}</td>
                                <td>{pratimas.level}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )} 

            { pratimai.length === 0 && <h4>Pratimu nera</h4>}
            

            <Toast 
                className="toastPosition"
                bg="danger" onClose={() => setShowToast(false)}
                show={showToast} 
                delay={2000} 
                autohide
            >
                <Toast.Header>
                    Ivyko klaida, bandant gauti pratimo informacija
                </Toast.Header>
                <Toast.Body>
                    <strong>{error}</strong>
                </Toast.Body>
            </Toast>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Pratimo detali informacija</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>pavadinimas: {pratimoDetails?.title}</p>
                    <p>pasikarotimai: {pratimoDetails?.reps}</p>
                    <p>lygis: {pratimoDetails?.level}</p>

                </Modal.Body>
                <Modal.Footer>

                <Button variant="warning">
                    Atnaujinti
                </Button>        
                <Button variant="danger" onClick={() => onDeleteTaskClick(pratimoDetails?._id)}>
                    Istrinti
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Uzdaryti
                </Button>
        
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home;