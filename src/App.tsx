/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Product from "./page/Product";
import Home from "./page/Home";
const App: React.FC = () => {
  return (
    <>
      <body className='bg-gray-100'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
        </Routes>
        <Footer />
      </body>
    </>
  );
};

export default App;
