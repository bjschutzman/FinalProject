import React from "react";

import "./StoreIngredients.css";
import Card from "react-bootstrap/Card";

const getIngredients = drink => {
  let drinkList = [];
  for (let [key, value] of Object.entries(drink)) {
    if (value && key.indexOf("strIngredient") > -1) {
      drinkList.push(value);
    }
  }
  return drinkList;
};

const Ingredients = props => (
  <div>
    <Card className="storeIngredients">
      <Card.Header as="h5">Ingredients</Card.Header>
      <Card.Body>
        <Card.Title>Cocktail Ingredients</Card.Title>
        <Card.Text>
          <div>
            Instructions:{" "}
            {props.selectedDrink && props.selectedDrink.strInstructions}
            <p />
            Ingredients:{" "}
            {props.selectedDrink &&
              getIngredients(props.selectedDrink).map(ingredient => (
                <div>
                  <ul>{ingredient}</ul>
                </div>
              ))}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);
// {props.drinks.map(drink => (
//   <li className = 'drinkChoice'
//   key={drink.idDrink}
//   onClick={()=> {props.handleClick(drink);}}
//   >{drink.strDrink}</li>
// ))}

export default Ingredients;
