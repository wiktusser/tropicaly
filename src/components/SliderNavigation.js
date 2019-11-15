import React from "react";

class SliderNavigation extends React.Component {
  render() {
    return (
      <ol className="carousel-indicators">
        <li data-target="#slide-item" data-slide-to={0} className="white" />
        <li
          data-target="#slide-item"
          data-slide-to={1}
          className="white active"
        />
        <li data-target="#slide-item" data-slide-to={2} className="white" />
      </ol>
    );
  }
}

export default SliderNavigation;
