import React, { Component } from "react";
import { Container } from "react-bootstrap";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-section" id="about">
        <Container>
          <h1>About</h1>
          <br></br>
          <br></br>
          <p>I like JavaScript and everything web.</p>
          <br></br>
          <p>
            When my dev senses kick-in I build presumably awesome stuff. I stay
            close to the community and try to keep tabs with the pace at which
            the web is evolving. I also like to create little projects on my
            own!
          </p>
          <br></br>
          <p>
            I built this site from scratch without any UI library/framework
            (except React though) and had so much fun along the way.
          </p>
          <br></br>
          <p>
            React, JavaScript, Node.js, and MERN Stack applications are the main
            focus for me to learn and develop better skills. I'll admit,
            sometimes I do get sucked into making the web look pretty with CSS.
          </p>
        </Container>
      </div>
    );
  }
}

export default About;
