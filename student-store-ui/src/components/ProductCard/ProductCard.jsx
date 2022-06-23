import * as React from "react";
import "./ProductCard.css";
import { useEffect } from "react";

export default function ProductCard({ name, id, image, price }) {
  return (
    <div className="product-card">
      <div className="media">
        <a href={"/products/" + id}>
          <img src={image}></img>
        </a>
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{name}</p>
          <p className="product-price">{"$" + price}</p>
        </div>
      </div>
    </div>
  );
}
