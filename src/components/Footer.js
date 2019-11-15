import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="links t-black">
            <a>Explore</a>
            <a>About</a>
            <a>Promotions</a>
            <a>Blog</a>
            <a>Contact</a>
          </div>
          <div className="copyright t-grey center">
            2019 - All rights reserved to Tropicaly
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
