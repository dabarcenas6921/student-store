import React, { useEffect } from "react";
import PurchaseCard from "../PurchaseCard/PurchaseCard";
import "./CheckoutReceipt.css";

function CheckoutReceipt({
  products,
  filteredProducts,
  formOneValue,
  formTwoValue,
  subTotal,
  setProducts,
  resetProductAmounts,
  handleShowReceipt,
}) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="card">
      <div className="card-head">
        <h4>Receipt</h4>
      </div>
      <div className="card-body">
        <p>
          Showing receipt for {formOneValue} available at {formTwoValue}:
        </p>
        <ul className="purchase">
          {filteredProducts.map((product, idx) => {
            return (
              <PurchaseCard
                key={idx}
                amount={product.amount}
                name={product.name}
                price={product.price}
              />
            );
          })}
          <li>Before taxes, the subtotal was {formatter.format(subTotal)}</li>
          <li>
            After taxes and fees were applied, the total comes out to{" "}
            {formatter.format(subTotal * 1.0725)}
          </li>
        </ul>
      </div>
      <footer className="card-foot">
        <button className="button" onClick={() => handleShowReceipt()}>
          Shop More
        </button>
        <button className="button" onClick={() => handleShowReceipt()}>
          Exit
        </button>
      </footer>
    </div>
  );
}

export default CheckoutReceipt;
