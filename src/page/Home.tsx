/** @format */

import React from "react";

const Home: React.FC = () => {
  return (
    <main className='container mx-auto py-8'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <div className='bg-white shadow rounded-lg p-6'>
          <img
            src='https://via.placeholder.com/300'
            alt='Product'
            className='mb-4'
          />
          <h3 className='text-xl font-semibold text-gray-800'>Product 1</h3>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className='mt-4 flex items-center justify-between'>
            <span className='text-xl font-semibold text-gray-800'>$19.99</span>
            <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='bg-white shadow rounded-lg p-6'>
          <img
            src='https://via.placeholder.com/300'
            alt='Product'
            className='mb-4'
          />
          <h3 className='text-xl font-semibold text-gray-800'>Product 2</h3>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className='mt-4 flex items-center justify-between'>
            <span className='text-xl font-semibold text-gray-800'>$29.99</span>
            <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='bg-white shadow rounded-lg p-6'>
          <img
            src='https://via.placeholder.com/300'
            alt='Product'
            className='mb-4'
          />
          <h3 className='text-xl font-semibold text-gray-800'>Product 3</h3>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className='mt-4 flex items-center justify-between'>
            <span className='text-xl font-semibold text-gray-800'>$39.99</span>
            <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='bg-white shadow rounded-lg p-6'>
          <img
            src='https://via.placeholder.com/300'
            alt='Product'
            className='mb-4'
          />
          <h3 className='text-xl font-semibold text-gray-800'>Product 4</h3>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className='mt-4 flex items-center justify-between'>
            <span className='text-xl font-semibold text-gray-800'>$49.99</span>
            <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
