import React from "react";
import {
  Link
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

class Menu extends React.Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <HashLink className="nav-link" to="/#main">Home</HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/#offer">Offer</HashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/details">Details</Link>
        </li>
      </ul>
    );
  }
}

export default Menu;
