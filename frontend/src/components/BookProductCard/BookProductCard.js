import React from 'react';

export const BookProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <span className="product-text">{product.SKU}</span>
      <span className="product-text">{product.name}</span>
      <span className="product-text">{product.price.toFixed(2)} $</span>
      <span className="product-text">{product.weight}KG</span>
    </div>
  );
};
