import React from "react";
import "./PurchaseCard.css";

function PurchaseCard({ amount, name, price }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <li className="purchase-list-item">
      {amount} total {name} was purchased at a cost of {formatter.format(price)}{" "}
      for a total cost of {formatter.format(price * amount)}
    </li>
  );
}

export default PurchaseCard;
