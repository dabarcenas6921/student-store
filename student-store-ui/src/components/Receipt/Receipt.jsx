import React from "react";
import "./Receipt.css";

function Receipt({ subTotal }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const taxes = subTotal * 0.0725;
  return (
    <div class="receipt">
      <div class="receipt-subtotal">
        <span class="label">Subtotal</span>
        <span></span>
        <span></span>
        <span class="center subtotal">{formatter.format(subTotal)}</span>
      </div>
      <div class="receipt-taxes">
        <span class="label">Taxes and Fees</span>
        <span></span>
        <span></span>
        <span class="center">{formatter.format(taxes)}</span>
      </div>
      <div class="receipt-total">
        <span class="label">Total</span>
        <span></span>
        <span></span>
        <span class="center total-price">
          {formatter.format(taxes + subTotal)}
        </span>
      </div>
    </div>
  );
}

export default Receipt;
