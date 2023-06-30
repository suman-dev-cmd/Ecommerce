/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { ProductObj } from "./productService";
import { getProducts } from "./productService";

interface ProductState {
  products: ProductObj;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

const initialState: ProductState = {
  products: {} as ProductObj,
  loading: false,
  error: null,
  hasMore: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductObj>) => {
      console.log("action", action);
      state.products = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError, setHasMore } =
  productSlice.actions;

// Thunk action to fetch products
export const fetchProducts =
  (page?: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const products = await getProducts(page as number);
      console.log("pr", products);
      dispatch(setProducts(products));
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
      if (products.data.length > 0) {
        setHasMore(false);
      }
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
//       dispatch(setLoading(true))
//       const product = await getProductById(productId)
//       dispatch(setProducts([product]))
//       dispatch(setLoading(false))
//     } catch (error) {
//       dispatch(setError(error.message))
//       dispatch(setLoading(false))
//     }
//   }

// // Thunk action to create a new product
// export const createNewProduct =
//   (productData: Product): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch(setLoading(true))
//       const product = await createProduct(productData)
//       dispatch(setProducts([product]))
//       dispatch(setLoading(false))
//     } catch (error) {
//       dispatch(setError(error.message))
//       dispatch(setLoading(false))
//     }
//   }

// // Thunk action to update an existing product
// export const updateExistingProduct =
//   (productId: number, productData: Product): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch(setLoading(true))
//       const product = await updateProduct(productId, productData)
//       dispatch(setProducts([product]))
//       dispatch(setLoading(false))
//     } catch (error) {
//       dispatch(setError(error.message))
//       dispatch(setLoading(false))
//     }
//   }

// // Thunk action to delete a product
// export const deleteProductById =
//   (productId: number): AppThunk =>
//   async (dispatch) => {
//     try {
//       dispatch(setLoading(true))
//       await deleteProduct(productId)
//       // Optionally, you can remove the deleted product from the state
//       // dispatch(removeProduct(productId))
//       dispatch(setLoading(false))
//     } catch (error) {
//       dispatch(setError(error.message))
//       dispatch(setLoading(false))
//     }
//   }

export default productSlice.reducer;
