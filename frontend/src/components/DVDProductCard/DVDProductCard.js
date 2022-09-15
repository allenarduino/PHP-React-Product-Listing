import React from 'react';
import './style.css';

export const DVDProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <span className="product-text">{product.SKU}</span>
      <span className="product-text">{product.name}</span>
      <span className="product-text">{product.price.toFixed(2)} $</span>
      <span className="product-text">{product.size}MB</span>
    </div>
  );
};
