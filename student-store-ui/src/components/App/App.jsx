import * as React from "react";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const results = products.filter((product) => {
    return product.name.includes(searchInput);
  });

  //Fetching product details from API
  function getProductDetails() {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        // handle success
        response.data.products.forEach((product) => {
          product.amount = 0;
        });
        let productData = response.data.products;
        setProducts(productData); //Setting the products object to API products.
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    console.log("New state of products is, ", products);
  }, [products]);

  function addAmountOfProduct(id) {
    let newProducts = [...products];
    newProducts[id - 1].amount += 1;
    setProducts(newProducts);
  }

  function removeAmountOfProduct(id) {
    let newProducts = [...products];
    newProducts[id - 1].amount -= 1;
    setProducts(newProducts);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={results}
                  setProducts={setProducts}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  addAmountOfProduct={addAmountOfProduct}
                  removeAmountOfProduct={removeAmountOfProduct}
                  subTotal={subTotal}
                  setSubTotal={setSubTotal}
                />
              }
            ></Route>
            <Route
              path="/products/:productid"
              element={<ProductDetail products={products} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
