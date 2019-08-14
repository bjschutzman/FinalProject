import React from "react";
import { Link } from "react-router-dom";
import "./SearchItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchStoreIngredients = drink => {
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
    <Card>
      <Card.Header as="h5">Store</Card.Header>
      <Card.Body>
        <Card.Title>Mojito</Card.Title>
        <Card.Text>
          <ul>
          <li>Bacardi Superior 750ml   $11.99</li>
          <li>Lime                     $0.49</li>
          <li>Domino Premium Sugar     $3.99</li>
          <li>Goodness Gardens Mint    $2.99</li>
          <li>Canada Dry Club Soda     $1.83</li>
          </ul>
        </Card.Text>
        <div className = 'total'>
          Total: $21.29
          </div>
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
