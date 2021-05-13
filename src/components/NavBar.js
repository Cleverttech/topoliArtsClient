import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const { user, onLogout } = this.props;
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand to="/">Topoli Arts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/artists">Artists</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/courses">Courses</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/forchildren">For Children</Link>
              </Nav.Link>
              {user ? (
                <Button onClick={onLogout} variant="link">
                  Logout
                </Button>
              ) : (
                <>
                  <Button variant="link">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button variant="secondary">
                    <Link to="/register">Register</Link>
                  </Button>{" "}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
