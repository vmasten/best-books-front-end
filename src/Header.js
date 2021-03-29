import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import './header.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Nav className='mr-auto'>
          <Link className='pr-2' to="/">Home</Link>
          <Link className='pr-2' to="/profile">Profile</Link>
          </Nav>
          <Nav>
          <LoginButton/>
          <LogoutButton className='navbar-right'/>
          </Nav>
      </Navbar>
    )
  }
}

export default Header;
