import React from "react";
import Typist from 'react-typist';

class MainSliderText extends React.Component {
  render() {
    return (
      <div className="maintext_item">
        <div className="img-container slide five">
          <div className="content-box">
            <div className="content-data">
              {/* <h5 className="t-white">Breath-taking views</h5>
              <span className="line gold" /> */}
              <div className="display t-white">
                <Typist cursor={
                  {
                    show: true,
                    blink: false,
                    element: '|',
                    hideWhenDone: true,
                    hideWhenDoneDelay: 0,
                  }
                }>
                  {/* //on mouse move? */}
                  <Typist.Delay ms={4500} />
                  <span>Do your job</span> 
                  <Typist.Backspace count={11} delay={800} />
                  <Typist.Delay ms={500} />
                  <span>Keep your job.</span>
                  <br />
                  <Typist.Delay ms={1000} />
                  <span className="ft-word">See the world</span>
                </Typist>

              </div>

            </div>
          </div>
          <div className="gradient-overlay op-5" />
        </div>
      </div>
    );
  }
}

export default MainSliderText;
