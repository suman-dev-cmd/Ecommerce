/** @format */

import React from "react";
import { useAppSelector, useAppDispatch } from "../service/hook";
import { fetchProducts } from "../service/product/productSlice";
// Define the types for your product and error
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: any;
  // Add other properties as needed
}

// Define the return type of the custom hook
interface ProductListHook {
  loading: boolean;
  products: Product[];
  productCount: number;
  error: string | null;
}

const useProductList = (page: number): ProductListHook => {
  const productObj = useAppSelector((state) => state.product);
  const loading = useAppSelector((state) => state.product.loading);
  const error = useAppSelector((state) => state.product.error);
  const productArr = useAppSelector((state) => state.product.productArrayData);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch, page]);
  return {
    loading,
    products: productArr,
    productCount: productObj.products.productCount,
    error,
  };
};

export default useProductList;
