import React from 'react';
import { AddProductHeader } from '../../components/AddProductHeader/AddProductHeader';
import './style.css';

const AddProduct = () => {
  return (
    <form id="product-form">
      <AddProductHeader />
      <div id="product-form">
        <div className="input-conatiner">
          <label for="SKU" className="sku-label">
            SKU
          </label>
          <input id="sku" required />
        </div>
        <div className="input-conatiner">
          <label for="name" className="name-label">
            Name
          </label>
          <input id="name" required />
        </div>
        <div className="input-conatiner">
          <label for="price" className="price-label">
            Price($)
          </label>
          <input id="price" required />
        </div>
        <div className="input-conatiner">
          <label for="Type Switcher" className="type-label">
            Type Switcher
          </label>
          <select id="productType" required>
            <option value="">Type Switcher</option>
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Book">Book</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
