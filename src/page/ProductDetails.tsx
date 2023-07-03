/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../service/hook";
import { fetchProductById } from "../service/product/productSlice";
import ProductDetailsSkeletonLoader from "../components/common/ProductDetailsSkeletonLodar";

const ProductDetails: React.FC = () => {
  const { productId } = useParams<string>();
  console.log("productId", productId);
  const product = useAppSelector((state) => state.product.product);
  const loading = useAppSelector((state) => state.product.loading);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (productId) dispatch(fetchProductById(productId));
  }, [dispatch, productId]);
  if (!product) {
    return <div>Product not found.</div>;
  }
  if (loading) {
    return <ProductDetailsSkeletonLoader />;
  }
  return (
    <div className='container mx-auto py-6 min-h-screen'>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full lg:w-1/2 px-4'>
          <img
            src={product.images?.[0].url}
            alt='Product'
            className='rounded-lg'
          />
        </div>
        <div className='w-full lg:w-1/2 px-4 mt-6 lg:mt-0'>
          <h3 className='font-bold mb-2'>{product.name}</h3>
          <p className='text-gray-600 mb-4'>{product.description}</p>
          <div className='flex items-center mb-4'>
            <span className='text-lg font-bold mr-2'>${product.price}</span>
            <span className='text-gray-500 text-sm'>(In Stock)</span>
          </div>
          <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
