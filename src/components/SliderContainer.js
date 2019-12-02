import React from "react";
import Slider from "./Slider";
import MainSliderText from "./MainSliderText";
import 'node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'

class SliderContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

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
              <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='miA_GaYogMQ' onClose={() => this.setState({isOpen: false})} />
                <a className="nav-link" onClick={this.openModal}>see Video</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderContainer;
