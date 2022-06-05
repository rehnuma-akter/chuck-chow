import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css";

const Header = () => {
    return (
    <div className='header'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Chuck Chow</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#\">Home</Nav.Link>
                <Nav.Link href="#aboutme">AboutMe</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link className='button' href="#login">Log In</Nav.Link>
                <Nav.Link eventKey={2} href="#register" className='button'>
                    Register
                </Nav.Link>
                </Nav> 
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Header;