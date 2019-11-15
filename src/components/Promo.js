import img1 from "../assets/img/promo/scotland.jpg";
import img2 from "../assets/img/promo/positano.jpg"
import img3 from "../assets/img/promo/newyork.jpg"
import img4 from "../assets/img/promo/morocco.jpg"
import img5 from "../assets/img/promo/venezuela.jpg"
import img6 from "../assets/img/promo/rome.jpg"
import img7 from"../assets/img/promo/autralia.jpg"
import React from "react";

class Promo extends React.Component {
  render() {
    return (
      <div id="promo" className="section white promo">
        <div className="container">
          <div className="content center">
            <h5 className="t-black">AROUND THE WORLD</h5>
            <span className="line gold" />
            <h2 className="t-black">
              It's time to <span className="t-gold">travel</span>
            </h2>
            <h6>
              Take a look at the most exclusive & most visited locations in the
              world - hand-picked just for you.
              <br /> Start traveling the world today!
            </h6>
            </div>
        </div>
      </div>
    );
  }
}

export default Promo;
