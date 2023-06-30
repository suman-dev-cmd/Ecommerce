/** @format */

import React from "react";
import { useAppSelector, useAppDispatch } from "../service/hook";
import { fetchProducts } from "../service/product/productSlice";
const Product: React.FC = () => {
  const products = useAppSelector((state) => state.product.products);
  const loading = useAppSelector((state) => state.product.loading);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className='container mx-auto py-8'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {products.length > 0 &&
          products.map((pro, i) => (
            <div className='bg-white shadow rounded-lg p-6' key={i}>
              <img
                src={pro.images && pro.images[0].url}
                alt='Product'
                className='mb-4'
              />
              <h3 className='text-xl font-semibold text-gray-800'>
                {pro.name}
              </h3>
              <p className='text-gray-600'>
                {pro.description.slice(0, 100)}...
              </p>
              <div className='mt-4 flex items-center justify-between'>
                <span className='text-xl font-semibold text-gray-800'>
                  ${pro.price}
                </span>
                <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Product;
