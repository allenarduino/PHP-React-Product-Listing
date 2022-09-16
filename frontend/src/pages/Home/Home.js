import React from 'react';
import { deleteSelectedProducts, getProducts } from '../../api/api';
import { ProductListHeader } from '../../components/ProductListHeader/ProductListHeader';
import { DVDProductCard } from '../../components/DVDProductCard/DVDProductCard';
import { FurnitureProductCard } from '../../components/FurnitureProductCard/FurnitureProductCard';
import { BookProductCard } from '../../components/BookProductCard/BookProductCard';
import './style.css';
import { ProductContext } from '../../contexts/ProductContextProvider';
import { Footer } from '../../components/Footer/Footer';

const Home = () => {
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const { product_state, product_dispatch } = React.useContext(ProductContext);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    const id = e.target.id;

    if (isChecked) {
      const found = product_state.products.find((product) => {
        return product.id == id;
      });
      setSelectedProducts([...selectedProducts, found.id]);
    } else {
      const index = selectedProducts.indexOf(id);
      selectedProducts.splice(index, 1);
    }
  };

  const deleteProducts = async () => {
    product_dispatch({ type: 'DELETE_SELECTED_PRODUCTS', payload: selectedProducts });
    const productObj = {
      products: selectedProducts,
      numOfProducts: selectedProducts.length,
    };
    await deleteSelectedProducts(JSON.stringify(productObj));
  };

  const fetchProducts = async () => {
    let products = await getProducts();
    product_dispatch({ type: 'FETCH_PRODUCTS', payload: products });
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <ProductListHeader deleteProducts={deleteProducts} />
      <div className="product-background">
        <div className="product-grid">
          {product_state.products.map((product) => (
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
      <Footer />
    </>
  );
};

export default Home;
