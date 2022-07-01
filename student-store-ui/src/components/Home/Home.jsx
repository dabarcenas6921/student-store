import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import About from "../About/About";
import { useEffect } from "react";
import SubNavbar from "../SubNavbar/SubNavbar";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Home({
  products,
  setProducts,
  addAmountOfProduct,
  removeAmountOfProduct,
  subTotal,
  setSubTotal,
  searchInput,
  setSearchInput,
  setCategory,
  resetProductAmounts,
}) {
  return (
    <div className="home">
      <Sidebar
        products={products}
        setProducts={setProducts}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
        resetProductAmounts={resetProductAmounts}
      />
      <Navbar />
      <Hero />
      <SubNavbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setCategory={setCategory}
      />
      <ProductGrid
        products={products}
        addAmountOfProduct={addAmountOfProduct}
        removeAmountOfProduct={removeAmountOfProduct}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
