import React, { useEffect } from "react";

function LargeProductCard({ products, productid }) {
  const name = products[productid - 1].name;
  const image = products[productid - 1].image;
  const description = products[productid - 1].description;
  const price = products[productid - 1].price;

  useEffect(() => {
    console.log(name, image, description, price);
  });

  return (
    <div className="product-card">
      <div className="media">
        <img src={image} alt="product cover" loading="lazy" />
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{name}</p>
        </div>
        <div className="desc">
          <p className="product-description">{description}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <button className="add">
              <i className="material-icons">add</i>
            </button>
            <button className="remove">
              <i className="material-icons">remove</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeProductCard;
