import React from 'react';
import './style.css';

export const DVDProductCard = ({ product, handleCheckboxChange }) => {
  return (
    <div className="product-card">
      <div className="checkbox-container">
        <input
          type="checkbox"
          className="delete-checkbox"
          onChange={handleCheckboxChange}
          id={product.id}
        />
      </div>
      <span className="product-text">{product.SKU}</span>
      <span className="product-text">{product.name}</span>
      <span className="product-text">{product.price.toFixed(2)} $</span>
      <span className="product-text">{product.size}MB</span>
    </div>
  );
};
