import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const MenuNav = () => {
    return(
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand style={{ color: 'red', marginLeft:'20px' }}> Musical Hendrix </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/"> Home </Nav.Link>   
                    <Nav.Link href="/map"> Mapa </Nav.Link>
                </Nav>
            </Navbar>
        </React.Fragment>
    );
}