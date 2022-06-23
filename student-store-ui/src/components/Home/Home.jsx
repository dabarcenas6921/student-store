import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";
import { useEffect } from "react";

export default function Home({ products }) {
  useEffect(() => {
    console.log("Currently in the Home component", products);
  });

  return (
    <div className="home">
      <Sidebar />
      <Navbar />
      <ProductGrid products={products} />
    </div>
  );
}
