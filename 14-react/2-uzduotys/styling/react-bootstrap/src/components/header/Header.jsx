import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="#home">Company name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#enterprise">Enterprise</Nav.Link>
                <Nav.Link href="#support">Support</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Button variant="outline-primary" className="ms-3">Sign up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};
export default Header;