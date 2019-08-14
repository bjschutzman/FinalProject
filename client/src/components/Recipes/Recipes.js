import React from "react";
import "./Recipes.css";

import Card from "react-bootstrap/Card";

const Recipes = props => (
  <div>
    <Card>
      <Card.Header as="h5">Recipes</Card.Header>
      <Card.Body>
        <Card.Title>These results match your search.</Card.Title>
        <Card.Text>
          <div>
            <ul>
              {props.drinks && props.drinks.map(drink => (
                <li
                  className="drinkChoice"
                  key={drink.idDrink}
                  onClick={() => {
                    props.handleClick(drink);
                  }}
                >
                  {drink.strDrink}
                </li>
              ))}
            </ul>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default Recipes;
