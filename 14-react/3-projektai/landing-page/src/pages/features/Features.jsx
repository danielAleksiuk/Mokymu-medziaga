
import { Row, Container } from 'react-bootstrap';
import './Features.scss'
import ItemDetails from '../../components/itemDetails/ItemDetails';

const Features = ({title,featuresItems}) => {
    return (
        <div id="features">
            <Container>
                <h1 className="features__title">{title}</h1>
                <Row>
                    { featuresItems.map((item, key) => (
                        <ItemDetails 
                            key={key}
                            title={item.title}
                            text={item.text}
                            iconName={item.icon}
                        />
                    ))}
                </Row>
           
            </Container>
      
        </div>
    )
}

export default Features;