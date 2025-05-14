import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import {  useState } from "react";
import Details from "../details/Details";

const List = ({list}) => {
    const [show, setShow] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setSelectedId(id);
        setShow(true);
    }

    return (
        <Container style={{margin: '20px'}}>
            <Row>
                {
                    list.map(item => (
                        <Col key={item.imdbID} md={4}>
                             <Card style={{ width: '18rem', margin: '20px 0' }}>
                                <Card.Img variant="top" src={item.Poster} />
                                <Card.Body>
                                    <Card.Title>{item.Title}</Card.Title>
                                    <Card.Text>
                                        Type: {item.Type} / Year: {item.Year}
                                    </Card.Text>
                                    <Button 
                                        onClick={() => handleShow(item.imdbID)} 
                                        style={{width: '100%'}} variant="primary">
                                            Open details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>

            { show && <Details id={selectedId} handleClose={handleClose}/> }

            
            {/* modal lango pvz */}
                {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>mano pirmas modal window</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal> */}
        </Container>
    )
};

export default List;