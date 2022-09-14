import React from 'react';
import { getProducts } from '../../api/api';
import { ProductListHeader } from '../../components/ProductListHeader/ProductListHeader';
import { DVDProductCard } from '../../components/DVDProductCard/DVDProductCard';
import { FurnitureProductCard } from '../../components/FurnitureProductCard/FurnitureProductCard';
import { BookProductCard } from '../../components/BookProductCard/BookProductCard';

const Home = () => {
  const [products, setPrducts] = React.useState([]);

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
        <div class="product-grid">
          {products.map((product) => (
            <div>
              {product.type == 'DVD' ? <DVDProductCard product={product} /> : null}
              {product.type == 'Furniture' ? <FurnitureProductCard product={product} /> : null}
              {product.type == 'Book' ? <BookProductCard product={product} /> : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
