import React from "react";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="section back four">
        <div className="container center">
          <div className="banner white square">
            <h5 className="t-gold">NEWSLETTER</h5>
            <span className="line black" />
            <h2 className="t-black">
              Don't <span className="t-gold">miss</span> it!
            </h2>
            <h6 className="center">
              Subscribe to our newsletter for special promotions & cool updates.
            </h6>
            <div id="fields">
              {}
              <form
                id="contact-form"
                method="POST"
                // action="php/contact.php"
                noValidate={true}
              >
                <div id="note" className="messages t-dark" />
                <div className="controls center newsletter">
                  {}
                  <div className="form-group">
                    <div className="input-item form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control light-grey"
                        placeholder="Email address*"
                        required="required"
                        data-error="Valid email is required."
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="help-block with-errors" />
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      className="primary-btn large square-bl square-tl black t-snow disabled"
                      defaultValue="Send"
                    />
                  </div>
                </div>
              </form>
              {}
            </div>
          </div>
          <h5 className="t-black mt-100">follow us</h5>
          <span className="line gold " />
          <div className="social-container m-20 center">
            <a href className="primary-btn white icon t-gold">
              <i className="fab fa-facebook-square" aria-hidden="true" />
            </a>
            <a href className="primary-btn white icon t-gold">
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
            <a href className="primary-btn white icon t-gold">
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
