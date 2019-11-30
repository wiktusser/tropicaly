import React from "react";

class OurServices extends React.Component {
  render() {
    return (
      <div className="section white center no-padding">
        <div className="container">
          <h5 className="t-black">SERVICES</h5>
          <span className="line gold" />
          <h2 className="mt-20">
            We <span className="t-gold">Offer:</span>
          </h2>
          <div className="row mt-50">
            {}
            <div className="col-lg-3">
              <div className="info-box light-grey">
                <i className="fas fa-plane-departure" />
                <h5 className="t-black">Air Reservations & Ticketing</h5>
              </div>
            </div>
            {}
            {}
            <div className="col-lg-3">
              <div className="info-box light-grey">
                <i className="fas fa-bed" />
                <h5 className="t-black">Accomodation</h5>
              </div>
            </div>
            {}
            {}
            <div className="col-lg-3">
              <div className="info-box light-grey">
                <i className="fas fa-car" />
                <h5 className="t-black">All transfers</h5>
              </div>
            </div>
            {}
            {}
            <div className="col-lg-3">
              <div className="info-box light-grey">
                <i className="fas fa-concierge-bell" />
                <h5 className="t-black">Resident care</h5>
              </div>
            </div>
            {}
            {}
            <div className="col-lg-3">
              <div className="info-box light-grey">
                <i className="fas fa-mountain" />
                <h5 className="t-black">Excursions and itineraries</h5>
              </div>
            </div>
            {}
            {}
            <div className="col-lg-3">
              <div className="info-box light-grey">
                <i className="far fa-handshake" />
                <h5 className="t-black">Workshops & trainings</h5>
              </div>
            </div>
            {}
            {}
            <div className="col-lg-3">
              <div className="info-box light-grey">
                <i className="far fa-star" />
                <h5 className="t-black">VIP treatment</h5>
              </div>
            </div>
            {}
            {}
            <div className="col-lg-3">
              <div className="info-box light-grey">
                <i className="fas fa-anchor" />
                <h5 className="t-black">Personalized care</h5>
              </div>
            </div>
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default OurServices;
