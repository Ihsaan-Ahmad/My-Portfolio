import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-section" id="contact">
        <Container>
          <h1>Contact</h1>
          <br></br>
          <br></br>
          <Row>
            <Col-1>
              <ul>
                <li>Email:</li>
                <li>Phone Number:</li>
              </ul>
            </Col-1>
            <Col-2>
              <ul>
                <p>ihsaan.edu4321@gmail.com</p>
                <p>4694631780</p>
              </ul>
            </Col-2>
          </Row>
          <footer>
            <a href="https://www.linkedin.com/in/ihsaan-ahmad/">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
            <span></span>
            <a href="https://github.com/ihsaan-Ahmad/">
              <i class="fab fa-github fa-lg"></i>
            </a>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Contact;
