/** @format */

import React from "react";
import useProductList from "../hooks/useProductList";
import SkeletonLoader from "../components/common/SkeletonLoader";
const Product: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { loading, products, productCount, error } = useProductList(page);
  // Function to handle scrolling
  const handleScroll = React.useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight - 20 &&
      !loading &&
      productCount !== 0 &&
      products.length !== productCount
    ) {
      // User has scrolled to the bottom, not loading, and there are more products to fetch
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading, products, productCount]);

  // Attach scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  if (loading) {
    return <SkeletonLoader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <main className='container mx-auto py-8'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {products?.length > 0 &&
          products?.map((pro, i) => (
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
