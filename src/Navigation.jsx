import React, { Component } from "react";
import "./Assets/css/Navigation.min.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <h2 className="navigation__logo">Portfolio</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
