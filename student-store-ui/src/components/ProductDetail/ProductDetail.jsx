import * as React from "react";
import "./ProductDetail.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LargeProductCard from "../LargeProductCard/LargeProductCard";

export default function ProductDetail({ products }) {
  //GET PRODUCT ID FROM URL
  const { productid } = useParams();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="product-detail">
        <div className="product-view">
          <h1 className="product-id">Product #{productid}</h1>
          <LargeProductCard products={products} productid={productid} />
        </div>
      </div>
    </div>
  );
}
