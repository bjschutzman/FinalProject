import React from "react";
import "./Drink.css";

import Card from "react-bootstrap/Card";
import Ingredients from "../Ingredients/Ingredients";

const blackText = {
  color: "black"
};

const Drink = props => (
  <div className="drinkCard">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.drink.image} />
      <Card.Body>
        <Card.Title>{props.drink.recipeName}</Card.Title>
        <Card.Text>
          <div>{props.drink.recipeInstructions}</div>
          <div style={blackText}>
            {props.drink.recipeIngredients.map(ingredient => (
              <li> {ingredient}</li>
            ))}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default Drink;
