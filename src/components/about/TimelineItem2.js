import React from "react";

class TimelineItem2 extends React.Component {
  render() {
    return (
      <div
        className="tl-item b-moon"
        // data-aos="fade-left"
        // data-aos-anchor-placement="center-bottom"
      >
        <span className="line b-moon" />
        <div className="date">Feb 10 2006</div>
        <div className="img">
          <img src="assets/img/tl-2.jpg" alt="exodus" className="img-fluid" />
        </div>
        <div className="info light-grey">
          <h5>200+ destinations</h5>
          <div className="excerpt">
            Over 200 amazing destinations where added to our portfolio.
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineItem2;
