/** @format */

import React from "react";
import { useAppSelector, useAppDispatch } from "../service/hook";
import { fetchProducts } from "../service/product/productSlice";
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: any;
}
const Home: React.FC = () => {
  const productObj = useAppSelector((state) => state.product);
  const loading = useAppSelector((state) => state.product.loading);
  const hasMore = useAppSelector((state) => state.product.hasMore);
  // const [productArr, setProductArr] = React.useState<Product[]>([]);
  const [page, setPage] = React.useState(1);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch, page]);
  // Product Array
  // React.useEffect(() => {
  //   if (productObj?.products?.data.length > 0) {
  //     const proArr = productObj?.products?.data;
  //     setProductArr([...productArr, ...proArr]);
  //   }
  // }, [productArr, productObj]);
  // Function to handle scrolling
  const handleScroll = React.useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading && hasMore) {
      // User has scrolled to the bottom, not loading, and there are more products to fetch
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore, loading]);

  // Attach scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className='container mx-auto py-8'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {productObj?.products?.data?.length > 0 &&
          productObj?.products?.data?.map((pro, i) => (
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
      {loading && <div>Loading...</div>}
    </main>
  );
};

export default Home;
