import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

export const ProductListHeader = ({ deleteProducts }) => {
  const history = useHistory();

  const moveToAddPage = (e) => {
    e.preventDefault();
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
        <button id="delete-product-butn" onClick={deleteProducts}>
          MASS DELETE
        </button>
      </div>
    </nav>
  );
};
