import { Container, Row, Col } from 'react-bootstrap';
import './OurServices.scss';
import ItemDetails from '../../components/itemDetails/ItemDetails';

const OurServices = ({ title, subtitle, servicesItems }) => {
  return (
    <section className="services-section">
      <Container>
        <h2 className="services-title">{title}</h2>
        <span className="services-underline"></span>
        <p className="services-subtitle">{subtitle}</p>
        <Row className="services-grid">
          {servicesItems.map((item, index) => (
    
            <Col key={index} md={4} className='service-card'>
              <ItemDetails
                title={item.title}
                text={item.text}
                iconName={item.icon}
              />
            </Col>  
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;