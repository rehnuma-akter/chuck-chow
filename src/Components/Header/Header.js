import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
    <div className='header'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">Chuck Chow </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/aboutme">AboutMe</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link as={Link} to="/login" className='button' >Log In</Nav.Link>
                <Nav.Link as={Link} to="/register" eventKey={2}  className='button'>
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