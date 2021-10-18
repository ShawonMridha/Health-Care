import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark"  sticky="top"  collapseOnSelect expand="lg">
        <Container>
           <Navbar.Brand href="#home">Health Care</Navbar.Brand>
           <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
             <Nav.Link as={Link} to="/services">Services</Nav.Link>
             <Nav.Link as={Link} to="/login">Login</Nav.Link>
             {/* <Link to="/login">Login</Link> */}
          <Navbar.Text>
           Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
    </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;