import React, { Component } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div className="portfolio-section" id="portfolio">
        <Container>
          <h1>Portfolio</h1>
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Path to Peak</Card.Title>
                <Card.Text>
                  Team Project. A National Park finder based on the state input
                  by the user.
                </Card.Text>
                <a href="https://ihsaan-ahmad.github.io/Path-to-Peak/">
                  <Button variant="primary">Go to project!</Button>
                </a>
              </Card.Body>
            </Card>
            <span></span>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Pocketbook</Card.Title>
                <Card.Text>
                  Team Project. Login authentication usage and main purpose of
                  application is to manage the user's budget.
                </Card.Text>
                <a href="https://mysterious-fjord-79558.herokuapp.com/">
                  <Button variant="primary">Go to project!</Button>
                </a>
              </Card.Body>
            </Card>
            <span></span>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Clicky Game</Card.Title>
                <Card.Text>React Project. A simple memory game!</Card.Text>
                <a href="https://ihsaan-ahmad.github.io/React-Clicky-Game/">
                  <Button variant="primary">Go to project!</Button>
                </a>
              </Card.Body>
            </Card>
            <span></span>
          </Row>
          <br></br>
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Psychic Game</Card.Title>
                <Card.Text>
                  JavaScript project. The app randomly picks a letter, and the
                  user has to guess which letter the app chose. Put the
                  following text on your page.
                </Card.Text>
                <a href="https://ihsaan-ahmad.github.io/Psychic-Game/">
                  <Button variant="primary">Go to project!</Button>
                </a>
              </Card.Body>
            </Card>
            <span></span>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>CrystalsCollector Game </Card.Title>
                <Card.Text>
                  Jquery project. Click on random number generated crystals to
                  try and match the computer's number.
                </Card.Text>
                <a href="https://ihsaan-ahmad.github.io/unit-4-game/">
                  <Button variant="primary">Go to project!</Button>
                </a>
              </Card.Body>
            </Card>
            <span></span>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>GifTastic</Card.Title>
                <Card.Text>
                  Ajax Project. A dynamic web page that populates with gifs of
                  your choice.
                </Card.Text>
                <a href="https://ihsaan-ahmad.github.io/GifTastic/">
                  <Button variant="primary">Go to project!</Button>
                </a>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
