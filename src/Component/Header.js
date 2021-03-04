import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>SHIN's DAILY CHECKLIST</h1>
        <Link style={linkStyle} to="./">
          Todo
        </Link>
        |{" "}
        <Link style={linkStyle} to="./About">
          Routine
        </Link>
      </header>
    );
  }
}

const headerStyle = {
  color: "white",
  margin: "0px",
  textAlign: "center",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  "font-size": "25px",
  margin: "20px",
};

export default Header;
