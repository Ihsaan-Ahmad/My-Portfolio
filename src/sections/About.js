import React, { Component } from "react";
import { Container } from "react-bootstrap";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-section" id="about">
        <Container>
          <h1>About</h1>
          <p>I like JavaScript and everything web.</p>
          <p>
            When my dev senses kick-in I build presumably awesome stuff. I stay
            close to the community and try to keep tabs with the pace at which
            the web is evolving. I also like to blog what I learn.
          </p>
          <p>
            I built this site from scratch. By scratch, I mean absolutely from
            scratch without any UI library/framework (except React though) and
            had so much fun along the way.
          </p>
          <p>
            React-Redux, Node.js, Ruby on Rails, Java, Spring Boot, Docker and
            AWS are the main tricks up my sleeve. I am also obsessed with making
            the web look pretty with SASS/CSS.
          </p>
        </Container>
      </div>
    );
  }
}

export default About;
