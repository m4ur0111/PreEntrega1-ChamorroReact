import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import imagen from './img/logo-completo.png';
import Button from '../common/Button/button';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

function BasicExample() {
    return (
        <Navbar expand="lg" className="contenedor-nav">
            <Container>
                <Navbar.Brand href="#home" className='Logo'><img src={ imagen } alt="Logo de la empresa" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto mobile-respon">
                    <Nav.Link href="#home" className='link'>Inicio</Nav.Link>
                    <Nav.Link href="#link" className='link'>Destinos</Nav.Link>
                    <Nav.Link href="#link" className='link'>Viajes</Nav.Link>
                    <Badge badgeContent={4} color="primary">
                        <AirplaneTicketIcon color="action" className='icono-ticket' />
                    </Badge>
                    <Button href='#link' text="Check in" />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
