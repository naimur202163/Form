import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.css'

function Navigation() {
  return (
    <Navbar className="nav" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand style={{ marginRight: "108px" }} href="#home">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Personal</Nav.Link>
            <Nav.Link href="#pricing">Chakra for Business</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Products</Nav.Link>
            <Nav.Link href="#deets">Company</Nav.Link>
            <Nav.Link href="#deets">Help</Nav.Link>
            <Nav.Link className="sign-In" href="/signin">
              Sign In
            </Nav.Link>
            <Nav.Link className="get-started"  href="#deets">
              Get Started
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation