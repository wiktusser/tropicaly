import React from "react";

class MainSliderText extends React.Component {
  render() {
    return (
      <div className="maintext_item">
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
                className="primary-btn no-bg large border-2 b-white white t-white aos-init aos-animate"
              >
                See video
              </a>
            </div>
          </div>
          <div className="gradient-overlay op-5" />
        </div>
      </div>
    );
  }
}

export default MainSliderText;
