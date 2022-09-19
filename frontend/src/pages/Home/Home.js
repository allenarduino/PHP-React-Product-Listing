import React from 'react';
import { deleteSelectedProducts, getProducts } from '../../api/api';
import { ProductListHeader } from '../../components/ProductListHeader/ProductListHeader';
import './style.css';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductContext } from '../../contexts/ProductContextProvider';
import { Footer } from '../../components/Footer/Footer';

const Home = () => {
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const { product_state, product_dispatch } = React.useContext(ProductContext);

  const checkItem = (id) => {
    const exists = selectedProducts.find((product_id) => product_id === id);
    if (exists) {
      return true;
    } else {
      return false;
    }
  };

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
              <ProductCard
                product={product}
                handleCheckboxChange={handleCheckboxChange}
                checked={checkItem(product.id) ? true : false}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
