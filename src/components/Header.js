import React from "react";
import Menu from "./Menu";


// import logo from '../assets/img/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className={!this.props.isTransparent ? 'b-gold white' : 'b-gold'}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            {}
            <div className="logo" href="#" onClick={this.props.toggleDisplay}>
              {/* <img
                src={logo}
                alt="Exodus"
                className="img-fluid"
              /> */}
              tropicaly
            </div>
            {}
            <button
              className="navbar-toggler first-button"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="animated-icon">
                <span />
                <span />
                <span />
              </span>
            </button>
            {}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Menu></Menu>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
