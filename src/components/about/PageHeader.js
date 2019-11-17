import React from "react";

class PageHeader extends React.Component {
  render() {
    return (
      <div id="about" className="section back two">
        <div className="container">
          <div className="content center">
            <div className="breadcrumb t-white mt-100">
              <a href="index.html" className="t-gold">
                Home
              </a>{" "}
              / About
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
