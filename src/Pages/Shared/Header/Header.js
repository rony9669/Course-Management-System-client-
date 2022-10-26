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
  console.log(user);
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
                    {/* <span className={`slider round${darkMode ? <FaSun /> : <FaMoon />}`}></span>
                    <span className="d-lg-none d-md-block">Switch mode</span> */}
                  </label>
                )}
              </ThemeContext.Consumer>
            </InputGroup>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <Image
                    title={user?.displayName}
                    className="me-4 mt-2 mb-2"
                    style={{ height: "40px", width: "45px" }}
                    roundedCircle
                    src={user?.photoURL ? user.photoURL : <FaUser></FaUser>}
                  ></Image>
                  <Button variant="light" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-primary m-2">
                    Login
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
