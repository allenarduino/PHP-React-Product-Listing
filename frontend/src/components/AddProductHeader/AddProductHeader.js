import React from 'react';
import './style.css';

export const AddProductHeader = () => {
  return (
    <nav className="nav-header">
      <h3 className="product-list-header-descn">Product Add</h3>
      <div className="spacer"></div>

      <div className="nav-buttons">
        <button id="save-butn">SAVE</button>
        <button id="cancel-butn">CANCEL</button>
      </div>
    </nav>
  );
};
