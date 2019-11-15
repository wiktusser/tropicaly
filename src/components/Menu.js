import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#about">
            Offer
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Explore
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#promo">
            Trips
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#promo">
            About Us
          </a>
        </li>
      </ul>
    );
  }
}

export default Menu;
