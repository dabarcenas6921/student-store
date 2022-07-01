import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect } from "react";

export default function ProductGrid({
  products,
  addAmountOfProduct,
  removeAmountOfProduct,
  subTotal,
  setSubTotal,
}) {
  return (
    <div className="product-grid">
      <div className="content">
        <a id="Buy">
          <h3 className="product-grid-header">Best Selling Products</h3>
        </a>
        <div className="grid">
          {products.map((product, idx) => {
            return (
              <ProductCard
                name={product.name}
                id={product.id}
                image={product.image}
                price={product.price}
                amount={product.amount}
                addAmountOfProduct={addAmountOfProduct}
                removeAmountOfProduct={removeAmountOfProduct}
                subTotal={subTotal}
                setSubTotal={setSubTotal}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
