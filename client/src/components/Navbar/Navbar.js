import React, { Component } from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const whiteText = {
  color: "white"
};

class Navs extends Component {
  render() {
    return (
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/" style={whiteText}>
          Cocktail Wizard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={whiteText}>
              Home
            </Nav.Link>
            <Nav.Link href="/shopping" style={whiteText}>
              Store
            </Nav.Link>
            <Nav.Link href="/saved" style={whiteText}>
              Saved
            </Nav.Link>
            <Nav.Link href="/login" style={whiteText}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navs;
