import React from 'react';
import { AddProductHeader } from '../../components/AddProductHeader/AddProductHeader';
import './style.css';

const AddProduct = () => {
  const [type, setType] = React.useState('');

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <form id="product-form">
      <AddProductHeader />
      <div id="product-form">
        <div className="input-conatiner">
          <label for="SKU" className="sku-label">
            SKU
          </label>
          <input id="sku" className="input-style" required />
        </div>
        <div className="input-conatiner">
          <label for="name" className="name-label">
            Name
          </label>
          <input id="name" className="input-style" required />
        </div>
        <div className="input-conatiner">
          <label for="price" className="price-label">
            Price($)
          </label>
          <input id="price" className="input-style" required />
        </div>
        <div className="input-conatiner">
          <label for="Type Switcher" className="type-label">
            Type Switcher
          </label>
          <select id="productType" required onChange={handleTypeChange} value={type}>
            <option value="">Type Switcher</option>
            <option value="DVD">DVD</option>
            <option value="Furniture">Furniture</option>
            <option value="Book">Book</option>
          </select>
        </div>

        {type == 'DVD' ? (
          <div className="input-conatiner">
            <label for="price" className="size-label">
              Size (MB)
            </label>
            <input id="DVD" className="input-style" required />
            <p>Please provide the size in MB</p>
          </div>
        ) : null}

        {type == 'Furniture' ? (
          <>
            <div className="input-conatiner">
              <label for="height" className="size-label">
                Height (CM)
              </label>
              <input id="Furniture" required className="input-style" />
            </div>
            <div className="input-conatiner">
              <label for="width" className="size-label">
                Width (CM)
              </label>
              <input id="Furniture" required className="input-style" />
            </div>
            <div className="input-conatiner">
              <label for="length" className="size-label">
                Length (CM)
              </label>
              <input id="Furniture" required className="input-style" />
              <p>Please provide dimensions in HxWxL format</p>
            </div>
          </>
        ) : null}

        {type == 'Book' ? (
          <div className="input-conatiner">
            <label for="weight" className="size-label">
              Weight (KG)
            </label>
            <input id="Book" required className="input-style" />
            <p>Please provide weight in KG</p>
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default AddProduct;
