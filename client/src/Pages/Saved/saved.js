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

class Drinks extends Component {
  state = {
    drinks: []
  };

  componentDidMount() {
    this.loadDrinks();
  }

  loadDrinks = () => {
    API.getSavedDrinks()
      .then(res => {
        this.setState({ drinks: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <body>
        <Navs />
        <Jumbo />
        <Container>
          {this.state.drinks.length ? (
            <div>
              {this.state.drinks.map(drink => (
                <Drink drink={drink} />
              ))}
            </div>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Container>
        <Footer />
      </body>
    );
  }
}

export default Drinks;
