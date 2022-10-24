import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
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
          <Nav className=" mx-auto">
            <Nav.Link href="#feat">Home</Nav.Link>
            <Nav.Link href="#features">Courses</Nav.Link>
            <Link to="/blog">Blog</Link>
            <Nav.Link href="#p">FAQ</Nav.Link>
            <Nav.Link href="#pr">Theme</Nav.Link>
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
