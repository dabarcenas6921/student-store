import React from "react";
import "./Receipt.css";

function Receipt({ subTotal }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const taxes = subTotal * 0.0725;
  return (
    <div className="receipt">
      <div className="receipt-subtotal">
        <span className="label">Subtotal</span>
        <span></span>
        <span></span>
        <span className="center subtotal">{formatter.format(subTotal)}</span>
      </div>
      <div className="receipt-taxes">
        <span className="label">Taxes and Fees</span>
        <span></span>
        <span></span>
        <span className="center">{formatter.format(taxes)}</span>
      </div>
      <div className="receipt-total">
        <span className="label">Total</span>
        <span></span>
        <span></span>
        <span className="center total-price">
          {formatter.format(taxes + subTotal)}
        </span>
      </div>
    </div>
  );
}

export default Receipt;
