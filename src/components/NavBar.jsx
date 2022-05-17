import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar , Container, Nav } from 'react-bootstrap';
import CartWidget from "./CartWidget";

function NavBar() {
    return ( 
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">PALO</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="/">Productos</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                </Container>
                <Nav.Link href="/cart"> 
                <CartWidget />
                </Nav.Link>
            </Navbar>
        </>

     );
}

export default NavBar;