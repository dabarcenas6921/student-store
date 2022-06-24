import React from "react";

function ShoppingCart() {
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
      </div>
    </div>
  );
}

export default ShoppingCart;
