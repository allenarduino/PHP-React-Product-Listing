import React from 'react';
import './style.css';
import { useLocation, useHistory } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const moveToAddPage = () => {
    history.push('/addproduct');
  };
  return (
    <nav className="nav-header">
      <h3 className="product-list-header-descn">
        {location.pathname == '/' ? 'Product List' : 'Product Add'}
      </h3>
      <div className="spacer"></div>
      {location.pathname == '/' ? (
        <div className="nav-buttons">
          <button id="add-product-butn" onClick={moveToAddPage}>
            ADD
          </button>
          <button id="delete-product-butn">MASS DELETE</button>
        </div>
      ) : (
        <div className="nav-buttons">
          <button id="save-butn">SAVE</button>
          <button id="cancel-butn">CANCEL</button>
        </div>
      )}
    </nav>
  );
};
