import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import OpenSidebar from "../OpenSidebar/OpenSidebar";

export default function Sidebar({ products }) {
  const [openState, setOpenState] = useState(false);

  const handleClick = () => {
    setOpenState((s) => !s);
  };

  function renderSidebar() {
    if (openState) {
      return <OpenSidebar setOpenState={setOpenState} products={products} />;
    }

    return (
      <section className="sidebar closed">
        <div className="wrapper">
          <button className="toggle-button button closed" onClick={handleClick}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <div className="shopping-cart">
            <div className="cart-icons">
              <span className="cart-icon icon button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <section className="sidebar">{renderSidebar()}</section>;
}
