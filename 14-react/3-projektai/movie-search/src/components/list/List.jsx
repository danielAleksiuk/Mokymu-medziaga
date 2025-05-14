import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import {  useState } from "react";
import Details from "../details/Details";
import Loader from "../loader/Loader";

const List = ({list}) => {
    const [show, setShow] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setIsLoading(true);
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
                                    { selectedId === item.imdbID && isLoading && <Loader/> }
                                    <Button 
                                        disabled={isLoading}
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

            { show && <Details id={selectedId} handleClose={handleClose} isLoading={setIsLoading}/> }

            
            {/* modal lango pvz */}
                {/* */}
        </Container>
    )
};

export default List;