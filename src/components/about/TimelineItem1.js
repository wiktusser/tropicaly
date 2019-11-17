import React from "react";

class TimelineItem1 extends React.Component {
  render() {
    return (
      <div
        className="tl-item"
        // data-aos="fade-right"
        // data-aos-anchor-placement="center-bottom"
      >
        <span className="line b-moon" />
        <div className="date">Oct 17 2005</div>
        <div className="img">
          <img src="assets/img/tl-1.jpg" alt="exodus" className="img-fluid" />
        </div>
        <div className="info light-grey">
          <h5>New York Office</h5>
          <div className="excerpt">
            We oppened our first office in the center of NY.
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineItem1;
