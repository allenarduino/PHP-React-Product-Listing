import React from 'react';

export const FurnitureProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <span className="product-text">{product.SKU}</span>
      <span className="product-text">{product.name}</span>
      <span className="product-text">{product.price.toFixed()} $</span>
      <span className="product-text">
        {product.height}x{product.width}x{product.length}
      </span>
    </div>
  );
};
