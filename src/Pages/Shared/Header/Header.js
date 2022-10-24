import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Deus_computer_engineering.png/1200px-Deus_computer_engineering.png"
            width="35"
            height="35"
            className="d-inline-block align-top me-1"
          />
          Computer Science & Engineering
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" mx-auto d-flex justify-content-evenly align-items-center text-decoration-none ">
            <Link className="text-decoration-none me-2 text-light " to="/home">
              Home
            </Link>
            <Link
              className="text-decoration-none me-2 text-light"
              to="/courses"
            >
              Courses
            </Link>
            <Link className="text-decoration-none me-2 text-light" to="/blog">
              Blog
            </Link>
            <Link className="text-decoration-none me-2 text-light" to="/FAQ">
              FAQ
            </Link>
            {/* <Link href="#pr">Theme</Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets" title="User NAME">
              User picture
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
