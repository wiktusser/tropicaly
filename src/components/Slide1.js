import React from "react";

class Slide1 extends React.Component {
  render() {
    return (
      <div className="carousel-item">
        <div className="img-container slide five">
          <div className="content-box">
            <div className="content-data">
              <h5 className="t-white">Breath-taking views</h5>
              <span className="line gold" />
              <div
                className="display t-white aos-init aos-animate"
                data-aos="fade-down"
                data-aos-anchor-placement="center-bottom"
              >
                Experience <span className="ft-word">epic</span> beauty
              </div>
              <a
                href="promo-page.html"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="primary-btn no-bg large border-2 b-white white t-white aos-init aos-animate"
              >
                Explore
              </a>
            </div>
          </div>
          <div className="gradient-overlay op-5" />
        </div>
      </div>
    );
  }
}

export default Slide1;
