import * as React from "react";
import "./OpenSidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";

export default function OpenSidebar({ setOpenState, products }) {
  return (
    <section className="sidebar open">
      <div className="wrapper">
        <button
          className="toggle-button button open"
          onClick={() => setOpenState((s) => !s)}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="open">
            <ShoppingCart products={products} />
            <CheckoutForm />
            <CheckoutSuccess />
          </div>
        </div>
      </div>
    </section>
  );
}
