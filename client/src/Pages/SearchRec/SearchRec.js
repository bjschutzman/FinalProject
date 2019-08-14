import React from "react";
// import axios from 'axios'
// import API from "../../utils/API";
import Navs from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Jumbo from "../../components/Jumbotron/Jumbotron";
import Recipes from "../../components/Recipes/Recipes";
import Ingredients from "../../components/Ingredients/Ingredients";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./SearchRec.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = props => {

  
    return(
      <div className={"Search"}>
        <Navs />
        <Jumbo
          handleClick={props.handleFormSubmit}
          handleChange={props.handleChange}
        />
        <Container>
          <Row>
            <Col>
              <Recipes
                drinks={props.drinks}
                key={props.idDrink}
                handleClick={props.handleDrinkClick}
              />
            </Col>
            <Col>
              <Ingredients
                save={props.save}
                selectedDrink={props.selectedDrink}
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }

export default Search;
