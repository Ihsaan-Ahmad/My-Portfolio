import React, { Component } from "react";
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <Link
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Main <span></span>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About <span></span>
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Portfolio <span></span>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </div>
    );
  }
}

export default Navbar;
