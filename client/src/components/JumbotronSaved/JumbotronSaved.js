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
          <p className="paragraph">View your saved drinks. </p>
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
