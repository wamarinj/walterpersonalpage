import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MyNavBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand to="/" as={Link}>Home</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link to="/portafolio" as={Link}>Portafolio</Nav.Link>
                            <NavDropdown title="About Me" id="basic-nav-dropdown">
                                <NavDropdown.Item to="/about" as={Link}>English</NavDropdown.Item>
                                <NavDropdown.Item to="/spanish" as={Link} >Español</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default MyNavBar;