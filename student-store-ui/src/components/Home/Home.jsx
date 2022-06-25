import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import About from "../About/About";
import { useEffect } from "react";
import SubNavbar from "../SubNavbar/SubNavbar";
import Hero from "../Hero/Hero";

export default function Home({
  products,
  addAmountOfProduct,
  removeAmountOfProduct,
  subTotal,
  setSubTotal,
}) {
  useEffect(() => {
    console.log("Currently in the Home component", products);
  });

  return (
    <div className="home">
      <Sidebar
        products={products}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
      />
      <Navbar />
      <Hero />
      <SubNavbar />
      <ProductGrid
        products={products}
        addAmountOfProduct={addAmountOfProduct}
        removeAmountOfProduct={removeAmountOfProduct}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
      />
      <About />
    </div>
  );
}
