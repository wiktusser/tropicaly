import React from "react";

class Section2 extends React.Component {
  render() {
    return (
      <div className="section white">
        <div className="container" id="posts">
          <div className="content center">
            <h5 className="t-black">UPCOMING EXCOURSES</h5>
            <span className="line gold" />
            <h2 className="t-black">
              Choose your next <span className="t-gold">trip</span>
            </h2>
            <div className="row text-justify mt-50">
              {}
              <div className="col-lg-4 left">
                <div className="post-item">
                  <img
                    src="assets/img/ft-1.jpg"
                    alt="exodus"
                    className="img-fluid main"
                  />
                  <a href="blog-detail.html">
                    <h4 className="t-black">Discovering Mikonos</h4>
                  </a>
                  <div className="info-box-detail left">
                    <div className="post-info">
                      By: <a className="author t-gold">Angela Manscori</a>
                    </div>
                    <div className="post-views">
                      <img
                        src="assets/img/user1.jpg"
                        alt="exodus"
                        className="img-fluid"
                      />
                      <img
                        src="assets/img/user2.jpg"
                        alt="exodus"
                        className="img-fluid"
                      />
                      <img
                        src="assets/img/user3.jpg"
                        alt="exodus"
                        className="img-fluid"
                      />
                      <span className="count">+110</span>
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              <div className="col-lg-4 left">
                <div className="post-item">
                  <img
                    src="assets/img/ft-2.jpg"
                    alt="exodus"
                    className="img-fluid main"
                  />
                  <a href="blog-detail.html">
                    <h4 className="t-black">The Island of Vulcano</h4>
                  </a>
                  <div className="info-box-detail left">
                    <div className="post-info">
                      By: <a className="author t-gold">Nissur Al Bettur</a>
                    </div>
                    <div className="post-views">
                      <img
                        src="assets/img/user1.jpg"
                        alt="exodus"
                        className="img-fluid"
                      />
                      <img
                        src="assets/img/user2.jpg"
                        alt="exodus"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {}
              {}
              <div className="col-lg-4 left">
                <div className="post-item">
                  <img
                    src="assets/img/ft-3.jpg"
                    alt="exodus"
                    className="img-fluid main"
                  />
                  <a href="blog-detail.html">
                    <h4 className="t-black">Cathedral in the Sea</h4>
                  </a>
                  <div className="info-box-detail left">
                    <div className="post-info">
                      By: <a className="author t-gold">Jesus A. Barrero</a>
                    </div>
                    <div className="post-views">
                      <img
                        src="assets/img/user1.jpg"
                        alt="exodus"
                        className="img-fluid"
                      />
                      <img
                        src="assets/img/user2.jpg"
                        alt="exodus"
                        className="img-fluid"
                      />
                      <img
                        src="assets/img/user3.jpg"
                        alt="exodus"
                        className="img-fluid"
                      />
                      <span className="count">+234</span>
                    </div>
                  </div>
                </div>
              </div>
              {}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section2;
