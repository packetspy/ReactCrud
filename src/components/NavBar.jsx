import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Navbar.Brand href='/'>crmK</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='/add'>Add</Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
