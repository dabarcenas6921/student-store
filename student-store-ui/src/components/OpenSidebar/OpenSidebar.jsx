import * as React from "react";
import "./OpenSidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";
import { useState } from "react";

export default function OpenSidebar({
  setOpenState,
  products,
  setProducts,
  subTotal,
  setSubTotal,
  resetProductAmounts,
}) {
  const filteredProducts = products.filter((product) => product.amount > 0);
  const [checkedOut, setCheckedOut] = useState(false);
  const [formOneValue, setFormOneValue] = useState("");
  const [formTwoValue, setFormTwoValue] = useState("");
  const [checkboxChecked, setCheckboxchecked] = useState(false);

  function handleCheckOutButtonPress() {
    // setCheckoutButtonPressed(true);
    setCheckedOut(true);
    console.log("ALL TRUE");
  }

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
            <ShoppingCart
              products={products}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
            />
            <CheckoutForm
              setCheckedOut={setCheckedOut}
              setFormOneValue={setFormOneValue}
              setFormTwoValue={setFormTwoValue}
              formOneValue={formOneValue}
              formTwoValue={formTwoValue}
              setCheckboxchecked={setCheckboxchecked}
              checkboxChecked={checkboxChecked}
              handleCheckOutButtonPress={handleCheckOutButtonPress}
            />
            <CheckoutSuccess
              filteredProducts={filteredProducts}
              checkedOut={checkedOut}
              setCheckedOut={setCheckedOut}
              formOneValue={formOneValue}
              formTwoValue={formTwoValue}
              setFormOneValue={setFormOneValue}
              setFormTwoValue={setFormTwoValue}
              subTotal={subTotal}
              setProducts={setProducts}
              products={products}
              handleCheckOutButtonPress={handleCheckOutButtonPress}
              checkboxChecked={checkboxChecked}
              setCheckboxchecked={setCheckboxchecked}
              resetProductAmounts={resetProductAmounts}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
