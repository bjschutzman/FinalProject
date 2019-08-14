import React from "react";
import "./Jumbotron.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Jumbo = () => {
  return (
    <div>
      <Jumbotron fluid className="backImage">
        <Container>
          <h1 className="title">Cocktail Wizard</h1>
          <p className="paragraph">
            Search for the ingredients to get an estimate of how much the total
            cost will be.{" "}
          </p>
          <br />
          <br />
          <br />
          <br />
          {/* <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipe Search"
            aria-label="Recipe Search"
            aria-describedby="basic-addon2"
            onChange={props.handleChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick = {props.handleClick}>Search</Button>
          </InputGroup.Append>
        </InputGroup> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
