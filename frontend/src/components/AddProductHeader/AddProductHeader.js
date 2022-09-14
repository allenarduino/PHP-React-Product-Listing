import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

export const AddProductHeader = ({ addPost }) => {
  const history = useHistory();

  const moveToProductListPage = () => {
    history.push('/');
  };
  return (
    <nav className="nav-header">
      <h3 className="product-list-header-descn">Product Add</h3>
      <div className="spacer"></div>

      <div className="nav-buttons">
        <input type="submit" value="SAVE" id="save-butn" />
        <button id="cancel-butn" onClick={moveToProductListPage}>
          CANCEL
        </button>
      </div>
    </nav>
  );
};
