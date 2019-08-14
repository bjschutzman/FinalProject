import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "../src/Pages/SearchRec/SearchRec";
import Store from "../src/Pages/SearchStore/SearchStore";
import Saved from "../src/Pages/Saved/saved";
import Login from "../src/Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../src/utils/API";

import "./App.css";
import LoginPage from "./components/Auth/LoginPage";

class App extends Component {
  state = {
    drinks: [],
    userInput: "",
    selectedDrink: null,
    recipeName: "",
    recipeInstructions: "",
    recipeIngredients: "",
    image: ""
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getDrinks(this.state.userInput)
      .then(res => this.setState({ drinks: res.data.drinks }))
      .catch(err => console.log(err));
  };

  // will take the drink that was clicked and
  handleDrinkClick = drink => {
    console.log("DRINK:", drink);
    this.setState({ selectedDrink: drink });
  };

  // will take the drink clicked by the user and set the state to that drink
  userDrinkClicked = event => {
    event.preventDefault();
    const valueTwo = event.target.value;
    console.log(event);
    this.setState({
      drinkClicked: valueTwo
    });
  };

  save = event => {
    console.log(this.state.selectedDrink);
    event.preventDefault();
    const ingredientList = [];
    if (this.state.selectedDrink.strIngredient1 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient1);
    }
    if (this.state.selectedDrink.strIngredient2 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient2);
    }
    if (this.state.selectedDrink.strIngredient3 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient3);
    }
    if (this.state.selectedDrink.strIngredient4 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient4);
    }
    if (this.state.selectedDrink.strIngredient5 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient5);
    }
    if (this.state.selectedDrink.strIngredient6 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient6);
    }
    console.log(ingredientList);
    API.saveDrink({
      recipeName: this.state.selectedDrink.strDrink,
      recipeInstructions: this.state.selectedDrink.strInstructions,
      recipeIngredients: ingredientList,
      image: this.state.selectedDrink.strDrinkThumb
    }).catch(err => console.log(err));
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      userInput: value
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            render={props => (
              <Search
                {...props}
                drinks={this.state.drinks}
                userInput={this.state.userInput}
                selectedDrink={this.state.selectedDrink}
                recipeName={this.state.recipeName}
                recipeInstructions={this.state.handleDrinkClick}
                recipeIngredients={this.state.recipeIngredients}
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}
                handleDrinkClick={this.handleDrinkClick}
                save={this.save}
              />
            )}
          />

          <Route
            exact
            path="/shopping/"
            render={props => (
              <Store
                {...props}
                drinks={this.state.drinks}
                userInput={this.state.userInput}
                selectedDrink={this.state.selectedDrink}
                recipeName={this.state.recipeName}
                recipeInstructions={this.state.handleDrinkClick}
                recipeIngredients={this.state.recipeIngredients}
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}
                handleDrinkClick={this.handleDrinkClick}
              />
            )}
          />

          <Route exact path="/saved/" component={Saved} />
          <Route exact path="/login/" component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
