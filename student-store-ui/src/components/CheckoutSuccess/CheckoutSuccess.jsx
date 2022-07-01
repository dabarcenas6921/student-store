import React, { useEffect, useState } from "react";
import CheckoutReceipt from "../CheckoutReceipt/CheckoutReceipt";
import axios from "axios";

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
}) {
  const [orderNumber, setOrderNumber] = useState(1);
  const currentDate = new Date().toUTCString();
  const [showReceipt, setShowReceipt] = useState(false);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleShowReceipt() {
    setShowReceipt(false);
    resetProductAmounts();
  }

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
          orderId: orderNumber,
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
      setOrderNumber(orderNumber + 1);
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
        <div className="content">
          <p>
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
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
