import React from "react";
import TimelineItem from "./TimelineItem";
import ScrollAnimation from 'react-animate-on-scroll';

import img1 from '../../assets/img/tl-1.jpg';

class Timeline extends React.Component {
  componentDidMount() {

  }

  timelineImages = [
    {
      date: '1 March 2020',
      src: img1,
      headline: 'Arrival to Bali',
      text: 'Passionate about travel and sharing the worlds wonders on the leisure travel side.'
    },
    {
      date: '1 March 2020',
      src: '',
      headline: 'Arrival to Hotel',
      text: 'Passionate about travel and sharing the worlds wonders on the leisure travel side.We provide corporate travelers hi-touch services to facilitate their business travel needs.'
    },
    {
      date: '4 March 2020',
      src: img1,
      headline: 'Surf days',
      text: 'Passionate about travel and sharing the worlds wonders on the leisure travel side.'
    },
    {
      date: '7 March 2020',
      src: img1,
      headline: 'Coworking days',
      text: 'Passionate about travel and sharing the worlds wonders on the leisure travel side.'
    },
  ]
  render() {
    return (
      <div id="timeline" className="section white center">
        <div className="container">
          <h5 className="t-black">TIMELINE</h5>
          <span className="line gold" />
          <h2 className="mt-20">
            Our planned<span className="t-gold">journey</span>...
          </h2>
          {}
          <div className="timeline-container">
            {this.timelineImages.map((item) =>
              <ScrollAnimation animateIn="fadeIn" key={item.src}>
              <TimelineItem item={item} />
            </ScrollAnimation>
              )}

          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
