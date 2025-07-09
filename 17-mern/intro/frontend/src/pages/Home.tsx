import { useEffect, useState, type SyntheticEvent } from "react";
import type { Task } from "../utils/types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';

const Home = () => {
    const [pratimai, setPratimai] = useState<Task[]>([]);
    const [pratimoDetails, setPratimoDetails] = useState<any>();
    const [editEnabled, setEditEnabled] = useState<boolean>(false);
    const [toast, setToast] = useState({
        body: '',
        header: '',
        type: 'success',
        show: false
    });
    const [deleteEnabled, setDeleteEnabled] = useState<boolean>(false);

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
    // const [showToast, setShowToast] = useState(false);
    // const [error, setError] = useState('');

 

    const handleClose = () => {  
        setShow(false) 
        setEditEnabled(false);
        setDeleteEnabled(false);
    };
    const handleShow = () => setShow(true);

    const openDetails = async (id: string) => {
        const response = await fetch('http://localhost:4000/api/pratimai/' + id );
        const pratimasDetails = await response.json();

        if (pratimasDetails.error) {
            // setError(pratimasDetails.error);
            // setShowToast(true);
            setToast({
                body: pratimasDetails.error,
                header: 'Ivyko klaida, bandant gauti pratimo informacija',
                type: 'danger',
                show: true
            });

            return;
        }

        if (response.ok) {
            setPratimoDetails(pratimasDetails)
            handleShow();
        }
    }

    const deleteTask = async (id: string) => {
        console.log(id);
        const response = await fetch('http://localhost:4000/api/pratimai/' + 'id', {method: 'DELETE'} );
        const responseDetails = await response.json();
        console.log(responseDetails)
        
        if (responseDetails.error) {
            setToast({
                body: responseDetails.error,
                header: 'Ivyko klaida, bandant istrinti pratima',
                type: 'danger',
                show: true
            });

            setDeleteEnabled(false);
            return;
        }

        if (response.ok) {
            setToast({
                body: 'istrintas ' + pratimoDetails.title + ' pratimas',
                header: 'Sekmingai ivykdytas trinimas',
                type: 'success',
                show: true
            });

            getPratimai();
            setShow(false);
            setDeleteEnabled(false);
        }
    
    }

    const onDeleteTaskClick = () => setDeleteEnabled(true);
    const onUpdateTaskClick = () => setEditEnabled(prev => !prev);

    const onInputChangeEvent = (e: SyntheticEvent) => {
        console.log(e);
        console.log(pratimoDetails);
    }

    // 0. paleisti appsa
    // 1. paspaudus istrinti
    //     vietoje action mygtuku - atsiras - 
    //         yes ir no mygtukai
    //             yes raudonas
    //             no melynas
    // 2. paspaudus no, action mygtuukai i pradine busena
    // 3. paspaudus yes, 
    //      3.1  sekmes atveju 
    //         uzdarom modal langa
    //         atnaujinam pratimu lista 
    //         zalias pranesimas
    //             success message
    //     3.2  klaidos atveju
    //         raudonas pranesimas 
    //             error message
    //         liekam tam paciame modal lange,action mygtukai i pradine busena

    const updateTaskOnSaveButtonClick = async () => {
        console.log(pratimoDetails)
        const response = await fetch(
            'http://localhost:4000/api/pratimai/' + pratimoDetails._id,
            {method: 'PATCH', 
                body: JSON.stringify({
                    title: pratimoDetails.title,
                    reps: pratimoDetails.reps,
                    level: pratimoDetails.level
                }),
                headers: {'Content-Type': 'application/json'}
            }
        );
        const responseDetails = await response.json();

        console.log(responseDetails);

        if (responseDetails.error) {
            // setError(responseDetails.error);
            // setShowToast(true);  

            setToast({
                body: responseDetails.error,
                header: 'Ivyko klaida, bandant atnaujinti pratimo informacija',
                type: 'danger',
                show: true
            });

            return;
        }

        if (response.ok) {
            setToast({
                body: 'atnaujinas ' + pratimoDetails.title + ' pratimas',
                header: 'Sekmingai ivykdytas atnaujinimas',
                type: 'success',
                show: true
            });

            getPratimai();
            setShow(false);   
        }
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
                bg={toast.type} onClose={() => setToast( { 
                    show: false,
                    body: '',
                    header: '',
                    type: ''
                 })}
                show={toast.show}  
                delay={2000} 
                autohide
            >
                <Toast.Header>
                    {toast.header}
                </Toast.Header>
                <Toast.Body>
                    <strong>{toast.body}</strong>
                </Toast.Body>
            </Toast>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>  
                    { editEnabled && "Atnaujinti pratimo informacija" }
                    { deleteEnabled && 'Ar tikrai norite istrinti si pratima?'}
                    { !editEnabled && !deleteEnabled && "Pratimo detali informacija"}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { editEnabled && 
                        <>
                            <form style={{textAlign: "right"}}>
                                <label htmlFor="title">Pavadinimas:</label>
                                <input  
                                    onChange={event => setPratimoDetails( {
                                        level:  pratimoDetails.level,
                                        title: event.target.value,
                                        reps: pratimoDetails.reps,
                                        _id: pratimoDetails._id
                                    } ) } 
                                    type="text" name="title" defaultValue={pratimoDetails?.title}/>

                                <br/>

                                <label htmlFor="reps">Pratimo pasikartojimai:</label>
                                <input 
                                    onChange={event => setPratimoDetails( {
                                        level:  pratimoDetails.level,
                                        title: pratimoDetails.title,
                                        reps: parseInt(event.target.value),
                                        _id: pratimoDetails._id
                                    } ) } 
                                    type="number" name="reps" defaultValue={pratimoDetails?.reps}/>
                                <br/>

                                <label htmlFor="level">Lygis:</label>
                                <input 
                                    onChange={event => setPratimoDetails( {
                                        level: parseInt(event.target.value),
                                        title: pratimoDetails.title,
                                        reps: pratimoDetails.reps,
                                        _id: pratimoDetails._id
                                    } ) } 
                                    type="number" name="level" defaultValue={pratimoDetails?.level}/>
                                <br/>
                            </form>
                        </>
                    }
                    {
                        !editEnabled && 
                            <>
                                <p>pavadinimas: {pratimoDetails?.title}</p>
                                <p>pasikarotimai: {pratimoDetails?.reps}</p>
                                <p>lygis: {pratimoDetails?.level}</p>
                            </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    {editEnabled && (
                        <>
                            <Button variant="success" onClick={updateTaskOnSaveButtonClick}>
                                Issaugoti
                            </Button>
                            <Button variant="primary" onClick={() => setEditEnabled(false)}>
                                Atsaukti
                            </Button>
                        </>
                    )}
                    {!editEnabled && !deleteEnabled &&
                        <>
                            <Button variant="warning" onClick={() => onUpdateTaskClick()}>
                                Atnaujinti
                            </Button>        
                            <Button variant="danger" onClick={() => onDeleteTaskClick()}>
                                Istrinti
                            </Button>
                          
                        </>
                    }

                    {deleteEnabled && (
                        <>
                            <Button variant="danger" onClick={ () => deleteTask(pratimoDetails._id)}>Taip</Button>
                            <Button onClick={() => setDeleteEnabled(false)}>Ne</Button>
                        </>
                    )}

                    <Button variant="secondary" onClick={handleClose}>
                        Uzdaryti
                    </Button>
          
        
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home;