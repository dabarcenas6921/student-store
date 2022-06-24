import React from "react";
import "./Receipt.css";

function Receipt() {
  return (
    <div class="receipt">
      <div class="receipt-subtotal">
        <span class="label">Subtotal</span>
        <span></span>
        <span></span>
        <span class="center subtotal">$2.99</span>
      </div>
      <div class="receipt-taxes">
        <span class="label">Taxes and Fees</span>
        <span></span>
        <span></span>
        <span class="center">$0.26</span>
      </div>
      <div class="receipt-total">
        <span class="label">Total</span>
        <span></span>
        <span></span>
        <span class="center total-price">$3.25</span>
      </div>
    </div>
  );
}

export default Receipt;
