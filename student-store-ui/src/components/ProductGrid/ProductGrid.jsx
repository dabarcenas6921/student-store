import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect } from "react";

export default function ProductGrid({
  products,
  addAmountOfProduct,
  removeAmountOfProduct,
}) {
  return (
    <div className="product-grid">
      <div className="content">
        <h1>Best Selling Products</h1>
        <div className="grid">
          {products.map((product, idx) => {
            return (
              <ProductCard
                name={product.name}
                id={product.id}
                image={product.image}
                price={product.price}
                addAmountOfProduct={addAmountOfProduct}
                removeAmountOfProduct={removeAmountOfProduct}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}