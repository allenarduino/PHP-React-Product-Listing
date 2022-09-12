import React from 'react';
import './style.css';
import { useLocation, useHistory } from 'react-router-dom';

export const ProductListHeader = () => {
  const location = useLocation();
  const history = useHistory();

  const moveToAddPage = () => {
    history.push('/add-product');
  };
  return (
    <nav className="nav-header">
      <h3 className="product-list-header-descn">Product List</h3>
      <div className="spacer"></div>
      <div className="nav-buttons">
        <button id="add-product-butn" onClick={moveToAddPage}>
          ADD
        </button>
        <button id="delete-product-butn">MASS DELETE</button>
      </div>
    </nav>
  );
};
