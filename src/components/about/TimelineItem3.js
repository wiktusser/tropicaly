import React from "react";

class TimelineItem3 extends React.Component {
  render() {
    return (
      <div
        className="tl-item"
        // data-aos="fade-left"
        // data-aos-anchor-placement="center-bottom"
      >
        <span className="line b-moon" />
        <div className="date">Sep 29 2010</div>
        <div className="img">
          <img src="assets/img/tl-3.jpg" alt="exodus" className="img-fluid" />
        </div>
        <div className="info light-grey">
          <h5>Surfing</h5>
          <div className="excerpt">It's always good to take a small break.</div>
        </div>
      </div>
    );
  }
}

export default TimelineItem3;
