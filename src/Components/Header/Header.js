import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Header.css";

const Header = () => {

    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    };
    return (
    <div className='header'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">Chuck Chow </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/register" eventKey={2}  className='button'>
                        Sign Up
                    </Nav.Link>
                    {!user ? (
                    <Nav.Link as={Link} to="/login" className='button' >Sign In</Nav.Link>
                    ) : (
                    <Nav.Link variant='primary' className='button' onClick={logOut}>Sign Out</Nav.Link>
                    )}
                </Nav> 
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default Header;