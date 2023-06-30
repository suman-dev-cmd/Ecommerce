/** @format */

import React from "react";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header className='bg-sky-500/75 shadow'>
      <div className='container mx-auto py-4'>
        <nav className='flex items-center justify-between'>
          <div>
            <Link to='#' className='text-xl font-bold text-white'>
              My Store
            </Link>
          </div>
          <div>
            <Link
              to='/'
              className='px-4 py-2 font-medium text-white hover:text-gray-900'>
              Home
            </Link>
            <Link
              to='/products'
              className='px-4 py-2 font-medium text-white hover:text-gray-900'>
              Products
            </Link>
            <Link
              to='#'
              className='px-4 py-2 font-medium text-white hover:text-gray-900'>
              Cart
            </Link>
            <Link
              to='#'
              className='px-4 py-2 font-medium text-white hover:text-gray-900'>
              Account
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
