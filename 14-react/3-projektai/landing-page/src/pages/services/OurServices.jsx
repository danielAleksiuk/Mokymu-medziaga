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
        

       {/* display: grid  https://getbootstrap.com/docs/5.3/utilities/spacing/#gap*/}
        <div 
          className="services-grid d-grid gap-3">
          {servicesItems.map((item, index) => (
    
            <Col key={index} className='service-card'>
              <ItemDetails
                title={item.title}
                text={item.text}
                iconName={item.icon}
              />
            </Col>  
          ))}
        
        </div>
      </Container>
    </section>
  );
};

export default OurServices;