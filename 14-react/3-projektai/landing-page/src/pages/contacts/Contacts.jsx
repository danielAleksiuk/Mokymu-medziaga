import { Col, Container, Row } from "react-bootstrap";

const Contacts = ({
    title,
    description,
    contactInfoTitle,
    contactInfoItems,
    form,
    socialIcons
}) => {
    return (
        <div id="contact">
            <Container>
                <h1>{title}</h1>
                <p>{description}</p>
                <Row>
                    <Col md={8}>
                        {
                            form.map(item => (
                                <>
                                    { item.type === 'input' && <input placeholder={item.text}/> }
                                    { item.type === 'textarea' && <textarea placeholder={item.text}/> }
                                    { item.type === 'button' && <button>{item.text}</button> }
                                </>
                            ))
                        }
                    </Col>
                    <Col md={4}>
                        <h3>{contactInfoTitle}</h3>
                        {
                            contactInfoItems.map(item => (<>
                                {item.property}
                            </>))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contacts;