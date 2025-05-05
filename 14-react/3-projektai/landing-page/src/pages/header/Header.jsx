import { Button, Container, Row } from "react-bootstrap";
import './Header.scss';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header__overlay">
                <Container>
                    <Row className="header__details">
                        <h1 className="header__title">{ props.title }</h1>
                        <p className="header__text">{props.subtitle}</p>
                        <Button className="header__button">{props.button}</Button>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Header;