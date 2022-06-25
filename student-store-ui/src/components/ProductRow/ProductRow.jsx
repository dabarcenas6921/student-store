import React, { useEffect, useState } from "react";
import "./ProductRow.css";

function ProductRow({ name, amount, price }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let cost = price * amount;
  return (
    <div class="product-row">
      <span class="flex-2 cart-product-name">{name}</span>
      <span class="center cart-product-quantity">{amount}</span>
      <span class="center cart-product-price">{formatter.format(price)}</span>
      <span class="center cart-product-subtotal">{formatter.format(cost)}</span>
    </div>
  );
}

export default ProductRow;
