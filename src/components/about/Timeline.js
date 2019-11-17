import React from "react";
import TimelineItem1 from "./TimelineItem1";
import TimelineItem2 from "./TimelineItem2";
import TimelineItem3 from "./TimelineItem3";
import TimelineItem4 from "./TimelineItem4";
import ScrollAnimation from 'react-animate-on-scroll';

class Timeline extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div id="timeline" className="section white center">
        <div className="container">
          <h5 className="t-black">TIMELINE</h5>
          <span className="line gold" />
          <h2 className="mt-20">
            Our <span className="t-gold">journey</span> so far...
          </h2>
          {}
          <div className="timeline-container">
            {}
            <ScrollAnimation animateIn="fadeIn">
              <TimelineItem1 />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <TimelineItem2 />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <TimelineItem3 />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <TimelineItem4 />
            </ScrollAnimation>

          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
