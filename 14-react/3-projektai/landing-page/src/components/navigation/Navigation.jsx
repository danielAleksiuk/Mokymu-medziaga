import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = ({title, navItems}) => {
    
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand>{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            navItems.map(item => (
                                <Nav.Link 
                                    key={item} 
                                    href={ '#' + item }
                                >
                                    {item}
                                </Nav.Link>  
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;