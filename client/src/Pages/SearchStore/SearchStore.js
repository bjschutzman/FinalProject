import React, { Component } from "react";
// import axios from 'axios'
import API from "../../utils/API";
import Navs from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Jumbo from "../../components/JumbotronTwo/Jumbotron";
import StoreIngredients from "../../components/StoreIngredients/StoreIngredients";
import SearchItem from "../../components/SearchItem/SearchItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./SearchStore.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Store = props => {
  return (
    <div className={"Search"}>
      <Navs />
      <Jumbo />
      <Container>
        <Row>
          <Col>
            <StoreIngredients selectedDrink={props.selectedDrink} />
          </Col>
          <Col>
            <SearchItem />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Store;
