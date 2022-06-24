import React from "react";

function CheckoutSuccess() {
  return (
    <div>
      <div className="checkout-success">
        <h3>
          Checkout Info{" "}
          <span className="icon button">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="content">
          <p>
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
