import React from "react";
import { Link } from "react-router-dom";
import "./Ingredients.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const getIngredients = drink => {
  let drinkList = [];
  for (let [key, value] of Object.entries(drink)) {
    if (value && key.indexOf("strIngredient") > -1) {
      const item = {};
      item.ingredient = value;
      const measurement = "strMeasure" + key.split("strIngredient")[1];
      item.measurement = drink[measurement];
      console.log(item);
      drinkList.push(item);
    }
  }
  return drinkList;
};

const Ingredients = props => (
  <div>
    <Card>
      <Card.Header as="h5">Ingredients</Card.Header>
      <Card.Body>
        <Card.Title>Cocktail Ingredients</Card.Title>
        <Card.Text>
          Instructions:{" "}
          {props.selectedDrink && props.selectedDrink.strInstructions}
          <p />
          Ingredients:{" "}
          {props.selectedDrink &&
            getIngredients(props.selectedDrink).map(item => (
              <div>
                <ul>{`${item.measurement} ${item.ingredient}`}</ul>
              </div>
            ))}
        </Card.Text>
        <Link to={props.selectedDrink ? "/shopping/" : null}>
          <Button className="button" variant="primary">
            Make Shopping List{" "}
          </Button>
          <Button className="button" variant="primary" onClick={props.save}>
            Save Recipe{" "}
          </Button>
        </Link>
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
