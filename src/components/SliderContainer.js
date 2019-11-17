import React from "react";
import Slider from "./Slider";

class SliderContainer extends React.Component {
  render() {
    return (
      <div id="main" className="white">
        <div className="content center">
          <Slider></Slider>
          <div className="maintext_container">
            <div>
              <h2 className="t-white">
                Live<span className="t-gold">unsetteled</span>
              </h2>
            </div>
          </div>
          <div className="videobtn_container">
            <div>
              <li className="nav-item">
                <a className="nav-link">see Video</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderContainer;
