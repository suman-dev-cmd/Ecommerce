/** @format */

import React from "react";
import { useAppSelector, useAppDispatch } from "../service/hook";
import { fetchProducts } from "../service/product/productSlice";
const Product: React.FC = () => {
  const productObj = useAppSelector((state) => state.product);
  const loading = useAppSelector((state) => state.product.loading);
  const [page, setPage] = React.useState(1);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch, page]);
  // Function to handle scrolling
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      // User has scrolled to the bottom
      setPage((prevPage) => {
        if (prevPage > Math.ceil(productObj?.products?.productCount / 4)) {
          return prevPage;
        }
        return prevPage + 1;
      });
    }
  };

  // Attach scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className='container mx-auto py-8'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {productObj.products.data.length > 0 &&
          productObj.products.data.map((pro, i) => (
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
