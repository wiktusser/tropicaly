import React from "react";

class Section1 extends React.Component {
  render() {
    return (
      <div id="about" className="section offer">
        <div className="container">
          <div className="content center">
            <h5 className="t-white extra-pd-btm">OUR OFFER</h5>
            {/* <span className="line gold" /> */}

            <div className="user-journey_container">
              <div className="user-journey_element">
                <h2 className="t-white">
                  We are <span className="t-gold">Team</span>
                </h2>
                <h6 className="t-white paragraph">
                  Passionate about travel and sharing the world's wonders on the
                  leisure travel side. We provide corporate travelers hi-touch
                  services to facilitate their business travel needs. Named each
              year as one of the{" "}
                  <span className="t-gold">"Best Places To Work"</span> in New York.
            </h6>
              </div>
              <div className="user-journey_element">
                <h2 className="t-white">
                  I am <span className="t-gold">Solo</span>
                </h2>
                <h6 className="t-white paragraph">
                  Passionate about travel and sharing the world's wonders on the
                  leisure travel side. We provide corporate travelers hi-touch
                  services to facilitate their business travel needs. Named each
              year as one of the{" "}
                  <span className="t-gold">"Best Places To Work"</span> in New York.
            </h6>
              </div>

            </div>
            <div className="user-journey-common_container">
              <div className="user-journey-common_box">
                <h2 className="t-white">
                  Our package
                </h2>
              </div>
            </div>

          </div>
        </div>
        {}
        <div className="video-back">
          <div className="color-overlay op-7" />
          <video autoPlay loop muted>
            <source src="assets/video/wave.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default Section1;
