/** @format */

import { makeHttpRequest } from "../api";
export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: any;
}
export interface ProductObj {
  count: number;
  data: Product[];
  productCount: number;
  success: boolean;
}

export const getProducts = async (page: number): Promise<ProductObj> => {
  try {
    const response: any = await makeHttpRequest(
      `/products?page=${page || 1}`,
      "GET"
    );
    return response;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch products"
    );
  }
};

export const getProductById = async (productId: string): Promise<Product> => {
  try {
    const response: any = await makeHttpRequest(`/product/${productId}`, "GET");
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch product details"
    );
  }
};

// export const createProduct = async (productData: Product): Promise<Product> => {
//   try {
//     const response = await api.post("/products", productData);
//     return response.data;
//   } catch (error) {
//     throw new Error(
//       error.response?.data?.message || "Failed to create product"
//     );
//   }
// };

// export const updateProduct = async (
//   productId: number,
//   productData: Product
// ): Promise<Product> => {
//   try {
//     const response = await api.put(`/products/${productId}`, productData);
//     return response.data;
//   } catch (error) {
//     throw new Error(
//       error.response?.data?.message || "Failed to update product"
//     );
//   }
// };

// export const deleteProduct = async (productId: number): Promise<void> => {
//   try {
//     await api.delete(`/products/${productId}`);
//   } catch (error) {
//     throw new Error(
//       error.response?.data?.message || "Failed to delete product"
//     );
//   }
// };
