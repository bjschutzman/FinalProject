import React, { Component } from "react";
// import axios from 'axios'
import API from "../../utils/API";
import Navs from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Jumbo from "../../components/JumbotronSaved/JumbotronSaved";
import Drink from "../../components/DrinkCard/Drink";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./saved.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListItem } from "../../components/List/index";
import LoginPage from "../../components/Auth/LoginPage";

class Login extends Component {
  render() {
    return (
      <body>
        <Navs />
        <LoginPage />
      </body>
    );
  }
}

export default Login;
