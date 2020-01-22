import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-section" id="contact">
        <Container>
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
