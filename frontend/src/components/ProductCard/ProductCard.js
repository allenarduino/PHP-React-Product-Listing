import React from 'react';
import './style.css';

export const ProductCard = ({ product, handleCheckboxChange, checked }) => {
  return (
    <div class="product-card">
      <div className="checkbox-container">
        <input
          type="checkbox"
          class="delete-checkbox"
          onChange={handleCheckboxChange}
          id={product.id}
          checked={checked}
        />
      </div>
      <span className="product-text">{product.SKU}</span>
      <span className="product-text">{product.name}</span>
      <span className="product-text">{product.price.toFixed(2)} $</span>
      {product.type == 'Furniture' ? (
        <span className="product-text">
          {product.height}x{product.width}x{product.length}
        </span>
      ) : null}
      {product.type == 'Book' ? <span className="product-text">{product.weight}KG</span> : null}
      {product.type == 'DVD' ? <span className="product-text">{product.size}MB</span> : null}
    </div>
  );
};
