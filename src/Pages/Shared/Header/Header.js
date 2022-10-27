import React, { useContext } from "react";
import "./Header.css";
import { Button, Image, InputGroup, Tooltip } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import {
  ThemeContext,
  themes,
} from "../../../contexts/AuthProvider/ThemeContext";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [darkMode, setDarkMode] = React.useState(true);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
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
          Computer Engineering
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
            <InputGroup>
              <ThemeContext.Consumer>
                {({ changeTheme }) => (
                  <label className="switch">
                    <input
                      color="link"
                      onClick={() => {
                        setDarkMode(!darkMode);
                        changeTheme(darkMode ? themes.light : themes.dark);
                      }}
                      type="checkbox"
                    />
                    <span className="slider round "></span>
                  </label>
                )}
              </ThemeContext.Consumer>
            </InputGroup>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <>
                    {user?.photoURL ? (
                      <Image
                        title={user?.displayName}
                        style={{ height: "40px", width: "40px" }}
                        className="me-4 mt-2 mb-2"
                        roundedCircle
                        src={user?.photoURL}
                      ></Image>
                    ) : (
                      <FaUser
                        title={user?.displayName}
                        className="text-info fs-2 me-4 mt-2 mb-2"
                      ></FaUser>
                    )}
                  </>

                  <Link className="btn btn-light m-2" onClick={handleLogOut}>
                    Log out
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="btn btn-outline-info fw-bold m-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-outline-info fw-bold m-2"
                  >
                    Registration
                  </Link>
                </>
              )}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
