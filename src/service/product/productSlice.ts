/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { Product } from "./productService";
import { getProducts } from "./productService";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      console.log("action", action);
      state.products = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;

// Thunk action to fetch products
export const fetchProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const products = await getProducts();
    console.log("pr", products);
    dispatch(setProducts(products));
    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

// // Thunk action to fetch a specific product by ID
// export const fetchProductById =
//   (productId: number): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch(setLoading(true));
//       const product = await getProductById(productId);
//       dispatch(setProducts([product]));
//       dispatch(setLoading(false));
//     } catch (error) {
//       dispatch(setError(error.message));
//       dispatch(setLoading(false));
//     }
//   };

// // Thunk action to create a new product
// export const createNewProduct =
//   (productData: Product): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch(setLoading(true));
//       const product = await createProduct(productData);
//       dispatch(setProducts([product]));
//       dispatch(setLoading(false));
//     } catch (error) {
//       dispatch(setError(error.message));
//       dispatch(setLoading(false));
//     }
//   };

// // Thunk action to update an existing product
// export const updateExistingProduct =
//   (productId: number, productData: Product): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch(setLoading(true));
//       const product = await updateProduct(productId, productData);
//       dispatch(setProducts([product]));
//       dispatch(setLoading(false));
//     } catch (error) {
//       dispatch(setError(error.message));
//       dispatch(setLoading(false));
//     }
//   };

// // Thunk action to delete a product
// export const deleteProductById =
//   (productId: number): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch(setLoading(true));
//       await deleteProduct(productId);
//       // Optionally, you can remove the deleted product from the state
//       // dispatch(removeProduct(productId));
//       dispatch(setLoading(false));
//     } catch (error) {
//       dispatch(setError(error.message));
//       dispatch(setLoading(false));
//     }
//   };

export default productSlice.reducer;
