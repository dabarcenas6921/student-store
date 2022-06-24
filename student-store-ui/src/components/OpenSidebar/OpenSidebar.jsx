import * as React from "react";
import "./OpenSidebar.css";
import { useEffect } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";

export default function OpenSidebar({ setOpenState }) {
  const handleClick = () => {
    setOpenState((s) => !s);
  };

  return (
    <section className="sidebar open">
      <div className="wrapper">
        <button className="toggle-button button open" onClick={handleClick}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="open">
            <ShoppingCart />
            <CheckoutForm />
            <CheckoutSuccess />
          </div>
        </div>
      </div>
    </section>
  );
}
