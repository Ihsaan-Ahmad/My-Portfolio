import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-section" id="contact">
        <Container>
          <footer>
            <i class="fab fa-linkedin fa-lg"></i>
            <span></span>
            <i class="fab fa-github fa-lg"></i>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Contact;
