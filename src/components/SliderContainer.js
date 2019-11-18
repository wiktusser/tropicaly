import React from "react";
import Slider from "./Slider";
import MainSliderText from "./MainSliderText";

class SliderContainer extends React.Component {
  render() {
    return (
      <div id="main" className="white">
        <div className="content center">
          <Slider></Slider>
          <div className="maintext_container">
            <MainSliderText />
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
