import React, { useEffect, useState } from "react";
import CheckoutReceipt from "../CheckoutReceipt/CheckoutReceipt";
import axios from "axios";
import "./CheckoutSuccess.css";

function CheckoutSuccess({
  products,
  setProducts,
  filteredProducts,
  checkedOut,
  setCheckedOut,
  formOneValue,
  formTwoValue,
  subTotal,
  handleCheckOutButtonPress,
  resetProductAmounts,
  setFormOneValue,
  setFormTwoValue,
  setCheckboxchecked,
}) {
  const currentDate = new Date().toDateString();
  const [showReceipt, setShowReceipt] = useState(false);
  const [purchasesLength, setPurchasesLength] = useState(0);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleShowReceipt() {
    setShowReceipt(false);
    resetProductAmounts();
    setFormOneValue("");
    setFormTwoValue("");
    setCheckboxchecked(false);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/store/purchases")
      .then((response) => {
        console.log(response.data.purchases.length);
        setPurchasesLength(response.data.purchases.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (checkedOut == true) {
      const shoppingCart = filteredProducts.map((product) => {
        let newObj = {};
        newObj["id"] = product.id;
        newObj["amount"] = product.amount;
        return newObj;
      });

      axios
        .post("http://localhost:3001/store/", {
          orderId: purchasesLength,
          user: { name: formOneValue, email: formTwoValue },
          shoppingCart: shoppingCart,
          total: formatter.format(subTotal * 1.0725),
          createdAt: currentDate,
        })
        .then((response) => {
          console.log("POSTED THE OBJECT...");
        })
        .catch((err) => {
          console.log(err);
        });
      setCheckedOut(false);
      setShowReceipt(true);
    }
  }, [handleCheckOutButtonPress]);
  return (
    <div>
      <div className="checkout-success">
        <h3>
          Checkout Info{" "}
          <span className="icon button">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="receipt-content">
          {showReceipt ? (
            <CheckoutReceipt
              filteredProducts={filteredProducts}
              formOneValue={formOneValue}
              formTwoValue={formTwoValue}
              subTotal={subTotal}
              setProducts={setProducts}
              products={products}
              resetProductAmounts={resetProductAmounts}
              handleShowReceipt={handleShowReceipt}
            />
          ) : (
            "A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room."
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
