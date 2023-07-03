/** @format */

import React from "react";

const ProductDetailsSkeletonLoader: React.FC = () => {
  return (
    <div className='container mx-auto py-8 min-h-screen'>
      <div className='flex flex-col w-full gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-96 rounded-2xl sm:flex-row '>
        <div className='bg-gray-200  sm:h-full sm:w-2/4 rounded-xl animate-pulse'></div>
        <div className='flex flex-col flex-1 gap-5 sm:p-2'>
          <div className='flex flex-col flex-1 gap-3'>
            <div className='w-full bg-gray-200 animate-pulse h-14 rounded-2xl'></div>
            <div className='w-full h-3 bg-gray-200 animate-pulse rounded-2xl'></div>
            <div className='w-full h-3 bg-gray-200 animate-pulse rounded-2xl'></div>
            <div className='w-full h-3 bg-gray-200 animate-pulse rounded-2xl'></div>
            <div className='w-full h-3 bg-gray-200 animate-pulse rounded-2xl'></div>
          </div>
          <div className='flex gap-3 mt-auto'>
            <div className='w-20 h-8 bg-gray-200 rounded-full animate-pulse'></div>
            <div className='w-20 h-8 bg-gray-200 rounded-full animate-pulse'></div>
            <div className='w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeletonLoader;
