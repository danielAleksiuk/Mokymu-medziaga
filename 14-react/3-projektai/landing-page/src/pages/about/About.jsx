import img from '../../assets/about/about.jpg';
import './About.scss';
import { HiCheck } from "react-icons/hi";
import { Row, Container, Col } from 'react-bootstrap';

const About = ({title, description, whyChoouseUsTitle,whyChoouseUsItems}) => {
    return (
        <Container id='about'>
            <Row>
                <Col>
                    <img src={img}/>
                </Col>
                <Col>
                    <h1 className='about__title'>{title}</h1>
                    <p>{description}</p>
                    <h4>{whyChoouseUsTitle}</h4>
                    <div style={{display:'flex', flexWrap: 'wrap'}}>
                        {
                            whyChoouseUsItems.map((item, index) => (
                                <Col sm={6} key={index}>
                                    <HiCheck /> {item}
                                </Col>
                            ))
                        }
                    </div>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default About;