import './Gallery.scss';
import { Row, Container, Col } from 'react-bootstrap'; 

const Gallery = ({title, description, images}) => {
    return (
        <div className="gallery">
               
            <Container>
                <h1 className="gallery__title">{title}</h1>
                <p className="gallery__description">{description}</p>
                <Row>
                    { images.map((item) => (
                        <Col key={item.id} md={4} 
                            className='gallery__img-block'>
                            <img src={item.url}/>
                            <div className='gallery__img-title'>
                                {item.title}
                            </div>
                        </Col>
                    ))}
                </Row>
           
            </Container>
    
        </div>
    )
}

export default Gallery;