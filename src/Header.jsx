import React, { Component } from 'react';
import './Assets/css/Header.min.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="menu-btn">
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className="menu">
          <div className="menu__branding">
            <div className="menu__portrait" />
          </div>

          <ul className="menu__nav">
            <li className="nav__item">
              <a href="/home.html" className="nav__link">
                HOME
              </a>
            </li>

            <li className="nav__item">
              <a href="/about.html" className="nav__link">
                ABOUT
              </a>
            </li>

            <li className="nav__item">
              <a href="/references.html" className="nav__link">
                REFERENZEN
              </a>
            </li>

            <li className="nav__item">
              <a href="/contact.html" className="nav__link">
                KONTAKT
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
