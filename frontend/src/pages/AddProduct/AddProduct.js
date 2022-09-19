import React from 'react';
import { createProduct } from '../../api/api';
import { AddProductHeader } from '../../components/AddProductHeader/AddProductHeader';
import { Footer } from '../../components/Footer/Footer';
import './style.css';
import { useHistory } from 'react-router-dom';

const AddProduct = () => {
  const [SKU, setSKU] = React.useState('');
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [type, setType] = React.useState('');
  const [size, setSize] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [width, setWidth] = React.useState('');
  const [length, setLength] = React.useState('');
  const [weight, setWeight] = React.useState('');

  const history = useHistory();

  const moveToHomePage = (e) => {
    history.push('/');
  };

  const handleSKU = (e) => {
    setSKU(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWidth = (e) => {
    setWidth(e.target.value);
  };

  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const addPost = async (e) => {
    e.preventDefault();
    const productObj = {
      SKU: SKU,
      name: name,
      price: Number(price),
      type: type,
      size: Number(size),
      height: Number(height),
      width: Number(width),
      length: Number(length),
      weight: Number(weight),
    };
    await createProduct(JSON.stringify(productObj));
    moveToHomePage();
  };

  return (
    <>
      <form id="product_form" onSubmit={addPost}>
        <AddProductHeader addPost={addPost} />
        <div id="product-form">
          <div className="input-conatiner">
            <label for="SKU" className="sku-label">
              SKU
            </label>
            <input id="sku" className="input-style" value={SKU} onChange={handleSKU} required />
          </div>
          <div className="input-conatiner">
            <label for="name" className="name-label">
              Name
            </label>
            <input id="name" className="input-style" value={name} onChange={handleName} required />
          </div>
          <div className="input-conatiner">
            <label for="price" className="price-label">
              Price($)
            </label>
            <input
              type="number"
              id="price"
              className="input-style"
              value={price}
              onChange={handlePrice}
              required
            />
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
              <input
                type="number"
                id="size"
                className="input-style"
                value={size}
                onChange={handleSize}
                required
              />
              <p>Please provide the size in MB</p>
            </div>
          ) : null}

          {type == 'Furniture' ? (
            <>
              <div className="input-conatiner">
                <label for="height" className="size-label">
                  Height (CM)
                </label>
                <input
                  type="number"
                  id="height"
                  required
                  className="input-style"
                  value={height}
                  onChange={handleHeight}
                />
              </div>
              <div className="input-conatiner">
                <label for="width" className="size-label">
                  Width (CM)
                </label>
                <input
                  type="number"
                  id="width"
                  required
                  className="input-style"
                  value={width}
                  onChange={handleWidth}
                />
              </div>
              <div className="input-conatiner">
                <label for="length" className="size-label">
                  Length (CM)
                </label>
                <input
                  type="number"
                  id="length"
                  required
                  className="input-style"
                  value={length}
                  onChange={handleLength}
                />
                <p>Please provide dimensions in HxWxL format</p>
              </div>
            </>
          ) : null}

          {type == 'Book' ? (
            <div className="input-conatiner">
              <label for="weight" className="size-label">
                Weight (KG)
              </label>
              <input
                type="number"
                id="weight"
                required
                className="input-style"
                value={weight}
                onChange={handleWeight}
              />
              <p>Please provide weight in KG</p>
            </div>
          ) : null}
        </div>
      </form>
      <Footer />
    </>
  );
};

export default AddProduct;
