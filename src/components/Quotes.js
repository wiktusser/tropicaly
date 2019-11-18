import React from "react";

class Quotes extends React.Component {
  render() {
    return (
      <div id="testimonial" className="section white ">
        <div className="container center">
          <h5 className="t-black">TESTIMONIALS</h5>
          <span className="line gold" />
          <h2 className="t-black">
            Our <span className="t-gold">clients</span> say:
          </h2>
          {}
          <div className="testimonial-container">
            <div id="t-item" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li
                  data-target="#t-item"
                  data-slide-to={0}
                  className="gold active"
                />
                <li data-target="#t-item" data-slide-to={1} className="gold" />
                <li data-target="#t-item" data-slide-to={2} className="gold" />
              </ol>
              <div className="carousel-inner content">
                {}
                <div className="carousel-item active">
                  <div className="item">
                    <div className="img center">
                      <img
                        src="assets/img/user2.jpg"
                        alt="Exodus"
                        className="img-fluid"
                      />
                    </div>
                    <h6 className="text t-black">
                      A must-have template. Maybe one of the best vintage
                      templates so far in the market. Recommended 100%.
                    </h6>
                    <div className="name t-black">MARIA De ANDRE'</div>
                    <div className="role t-dark-clay">Artist</div>
                  </div>
                </div>
                {}
                <div className="carousel-item">
                  <div className="item">
                    <div className="img center">
                      <img
                        src="assets/img/user1.jpg"
                        alt="Exodus"
                        className="img-fluid"
                      />
                    </div>
                    <h6 className="text t-black">
                      Extremelly flexible and easy to use. Code is clean and all
                      files well organized. Great job guys.
                    </h6>
                    <div className="name t-black">JOHN E. PERRY</div>
                    <div className="role t-dark-clay">Moravian Ltd - CEO</div>
                  </div>
                </div>
                {}
                <div className="carousel-item">
                  <div className="item ">
                    <div className="img center">
                      <img
                        src="assets/img/user3.jpg"
                        alt="Exodus"
                        className="img-fluid"
                      />
                    </div>
                    <h6 className="text t-black">
                      Fast, easy, reliable, fun, flexible, modern. Many options,
                      colors, widgets. +++
                    </h6>
                    <div className="name t-black">LINDA FALANGY</div>
                    <div className="role t-dark-clay">Graphic Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
