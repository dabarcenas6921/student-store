import React from "react";
import CartTable from "../CartTable/CartTable";

function ShoppingCart({ products, subTotal, setSubTotal }) {
  // If itemQuantity > 0, show Shopping Cart
  const filteredProducts = products.filter((product) => product.amount > 0);

  return (
    <div>
      <h3>
        Shopping Cart
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>
      <div className="notification">
        {filteredProducts.length > 0 ? (
          <CartTable
            products={filteredProducts}
            subTotal={subTotal}
            setSubTotal={setSubTotal}
          />
        ) : (
          "No items added to cart yet. Start shopping now!"
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
