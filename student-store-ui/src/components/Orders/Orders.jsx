import React from "react";
import "./Orders.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import About from "../About/About";
import { useState } from "react";
import SubNavbar from "../SubNavbar/SubNavbar";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Orders({
  products,
  setProducts,
  subTotal,
  setSubTotal,
  resetProductAmounts,
}) {
  const [openState, setOpenState] = useState(false);
  return (
    <div className="home">
      <Sidebar
        products={products}
        setProducts={setProducts}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
        resetProductAmounts={resetProductAmounts}
        openState={openState}
        setOpenState={setOpenState}
      />
      <Navbar />
    </div>
  );
}
