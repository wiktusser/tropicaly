import React from "react";

class TimelineItem4 extends React.Component {
  render() {
    return (
      <div
        className="tl-item"
        // data-aos="fade-right"
        // data-aos-anchor-placement="center-bottom"
      >
        <span className="line b-moon" />
        <div className="date">Jun 03 2017</div>
        <div className="img">
          <img src="assets/img/tl-4.jpg" alt="exodus" className="img-fluid" />
        </div>
        <div className="info light-grey">
          <h5>1000+ flights</h5>
          <div className="excerpt">
            Partnership with Exodus Airlines to cover all destinations.
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineItem4;
