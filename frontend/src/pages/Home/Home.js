import React from 'react';
import { getProducts } from '../../api/api';
import { ProductListHeader } from '../../components/ProductListHeader/ProductListHeader';
import { DVDProductCard } from '../../components/DVDProductCard/DVDProductCard';
import { FurnitureProductCard } from '../../components/FurnitureProductCard/FurnitureProductCard';
import { BookProductCard } from '../../components/BookProductCard/BookProductCard';
import './style.css';

const Home = () => {
  const [products, setPrducts] = React.useState([]);
  const [selectedProducts, setSelectedProducts] = React.useState([]);

  const handleCheckboxChange = (e) => {
    console.log(e.target.checked);
    const isChecked = e.target.checked;
    const id = e.target.id;

    if (isChecked) {
      console.log(id);
      const found = products.find((product) => {
        return product.id == id;
      });
      setSelectedProducts([...selectedProducts, found.id]);

      console.log(selectedProducts);
    } else {
      const index = selectedProducts.indexOf(id);
      selectedProducts.splice(index, 1);
      console.log(selectedProducts);
    }

    console.log(selectedProducts);
  };

  const fetchProducts = async () => {
    setPrducts(await getProducts());
    console.log(products);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <ProductListHeader />
      <div className="product-background">
        <div className="product-grid">
          {products.map((product) => (
            <div>
              {product.type == 'DVD' ? (
                <DVDProductCard product={product} handleCheckboxChange={handleCheckboxChange} />
              ) : null}
              {product.type == 'Furniture' ? (
                <FurnitureProductCard
                  product={product}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ) : null}
              {product.type == 'Book' ? (
                <BookProductCard product={product} handleCheckboxChange={handleCheckboxChange} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
