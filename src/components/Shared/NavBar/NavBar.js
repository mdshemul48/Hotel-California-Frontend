import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';

import logo from '../../../assets/summer-logo.png';
import useAuth from '../../../hooks/useAuth';

import './NavBar.css';
const NavBar = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();
  const handleLogin = () => {
    history.push('/auth');
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <Navbar expand='lg' variant='light' className='navbar'>
      <Container className='py-2'>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt='website logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} activeClassName='active' to='/' exact>
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName='active'
              to='/my-reservation'
              exact
            >
              My Reservation
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              activeClassName='active'
              to='/manage-reservation'
            >
              Manage All Rooms
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName='active' to='/add-room'>
              Add A New Room
            </Nav.Link>

            {/* login and logout button */}
            {user?.email ? (
              <Button
                variant='outline-dark'
                className='ms-2'
                size='sm'
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant='outline-dark'
                className='ms-2'
                size='sm'
                onClick={handleLogin}
              >
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
