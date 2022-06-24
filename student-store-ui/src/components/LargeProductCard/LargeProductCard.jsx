import React, { useEffect } from "react";
import "./LargeProductCard.css";
function LargeProductCard({ products, productid }) {
  const name = products[productid - 1].name;
  const image = products[productid - 1].image;
  const description = products[productid - 1].description;
  const price = products[productid - 1].price;

  useEffect(() => {
    console.log(name, image, description, price);
  });

  return (
    <div className="large-product-view-card">
      <div className="large-product-card">
        <div className="large-media">
          <img className="large-img" src={image} alt="product cover" />
        </div>
        <div className="large-product-info">
          <div className="large-main-info">
            <p className="large-product-name">{name}</p>
            <p className="large-product-price">{price}</p>
          </div>
          <div className="large-desc">
            <p className="large-product-description">{description}</p>
          </div>
          <div className="large-actions">
            <div className="large-buttons">
              <button className="large-add">
                <i className="material-icons">add</i>
              </button>
              <button className="large-remove">
                <i className="material-icons">remove</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeProductCard;
