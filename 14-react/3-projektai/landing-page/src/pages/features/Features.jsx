import * as icons from "react-icons/hi";
import { Col, Row, Container } from 'react-bootstrap';
import './Features.scss'

const Features = ({title,featuresItems}) => {
    return (
        <div className="features">
            <Container>
                <h1 className="features__title">{title}</h1>
                <Row>
                    { featuresItems.map((item, key) => (
                        <Col key={key}>
                            <span className="features__icon">{ icons[item.icon]() }</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Col>
                    ))}
                </Row>
           
            </Container>
      
        </div>
    )
}

export default Features;