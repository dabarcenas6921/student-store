import React from "react";
import CartTable from "../CartTable/CartTable";

function ShoppingCart({ products }) {
  // If itemQuantity > 1, show Shopping Cart
  return (
    <div>
      <h3>
        Shopping Cart
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>
      <div className="notification">
        No items added to cart yet. Start shopping now!
        <CartTable products={products} />
      </div>
    </div>
  );
}

export default ShoppingCart;
