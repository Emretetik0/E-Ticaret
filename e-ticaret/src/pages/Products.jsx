import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/ProductsSlice';
import Box from '../components/Box';
import ProductFilter from '../components/ProductFilter';
import PriceSlider from '../components/PriceSlider'

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredItems); 
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  return (
    <div className="px-20 pt-20 flex">
      <div className="flex-1">
        <div className="flex gap-4 justify-end mb-4 pr-36">
          <PriceSlider />
          <ProductFilter />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product) => (
            <Box key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
