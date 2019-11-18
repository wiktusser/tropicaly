import React from "react";


class Slider extends React.Component {
  render() {
    return (
      <div className="slider-container">
        <div id="slide-item" className="slide" data-ride="carousel">
          <div className="carousel-inner2" data-poster-url="https://assets-global.website-files.com/5a8dab23b7a50a0001e1ecc1/5c5881877dd3284b01ceb0b4_RYHeroVideo_Feb4-poster-00001.jpg" 
          data-video-urls="https://assets-global.website-files.com/5a8dab23b7a50a0001e1ecc1/5c5881877dd3284b01ceb0b4_RYHeroVideo_Feb4-transcode.mp4,https://assets-global.website-files.com/5a8dab23b7a50a0001e1ecc1/5c5881877dd3284b01ceb0b4_RYHeroVideo_Feb4-transcode.webm" 
          data-autoplay="true" data-loop="true">
            <video
              autoPlay
              loop
              style={{
                backgroundImage: 'url(https://assets-global.website-files.com/5a8dab23b7a50a0001e1ecc1/5c5881877dd3284b01ceb0b4_RYHeroVideo_Feb4-poster-00001.jpg',

              }}
              muted
              playsInline>
              <source src="http://wordpress1990642.home.pl/autoinstalator/wordpressplus/wp-content/uploads/2019/11/coverpage.mp4" />
              {/* add webm */}
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
