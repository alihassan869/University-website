import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assests/images/logo.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="mt-3">
            <img src={logo} className="img-fluid w-75 h-75 " alt="not found" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-md-5">
              <Link to="/" className="text-decoration-none text-white link">
                Home
              </Link>
              <Link
                to="/about"
                className="text-decoration-none text-white link"
              >
                About
              </Link>
              <Link
                to="/Course"
                className="text-decoration-none text-white link"
              >
                Course
              </Link>
              <Link to="/Blog" className="text-decoration-none text-white link">
                Blog
              </Link>
              <Link
                to="/SignIn"
                className="text-decoration-none text-white link "
              >
                Sign In
              </Link>
              <Link
                to="/Login"
                className="text-decoration-none text-white link-btn py-md-0 py-3"
              >
                <Button className="btn-login px-5 py-2 ">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
