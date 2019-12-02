import React from "react";
import Slider from "./Slider";
import MainSliderText from "./MainSliderText";
import ModalVideo from 'react-modal-video';

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
          <Slider shouldPlay={!this.state.isOpen}></Slider>
          <div className="maintext_container">
            <MainSliderText />
          </div>
          <div className="videobtn_container">
            <div>
              <ModalVideo  channel='youtube' isOpen={this.state.isOpen} videoId='miA_GaYogMQ' onClose={() => this.setState({isOpen: false})} />
                <a className="video-link" onClick={this.openModal}>see full Video</a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderContainer;
