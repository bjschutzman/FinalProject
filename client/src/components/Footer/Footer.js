import React, { Component } from "react";
import "./Footer.css";
import Nav from "react-bootstrap/Nav";
const whiteText = {
  color: "white"
};

class Footer extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <Nav
          sticky="bottom"
          className="justify-content-center"
          activeKey="/home"
        >
          <p style={whiteText}>Cocktail Wizard</p>
        </Nav>
      </div>
    );
  }
}

export default Footer;
