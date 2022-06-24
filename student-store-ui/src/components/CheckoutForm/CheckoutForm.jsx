import React from "react";

function CheckoutForm() {
  return (
    <div>
      <div className="checkout-form">
        <h3>
          Payment Info{" "}
          <span className="button">
            <i className="material-icons md-48">monetization_on</i>
          </span>
        </h3>
        <div className="input-field">
          <label className="label">Name</label>
          <div className="control ">
            <input
              name="name"
              className="checkout-form-input"
              type="text"
              placeholder="Student Name"
              defaultValue=""
            />
          </div>
        </div>
        <div className="input-field">
          <label className="label">Email</label>
          <div className="control">
            <input
              name="email"
              className="checkout-form-input"
              type="email"
              placeholder="student@codepath.org"
              defaultValue=""
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input name="termsAndConditions" type="checkbox" />
              <span className="label">
                I agree to the{" "}
                <a href="#terms-and-conditions">terms and conditions</a>
              </span>
            </label>
          </div>
        </div>
        <p class="is-danger"></p>
        <div className="field">
          <div className="control">
            <button className="button checkout-button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
