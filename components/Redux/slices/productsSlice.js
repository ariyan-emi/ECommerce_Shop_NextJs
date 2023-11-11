import { createSlice } from "@reduxjs/toolkit";


const initialState =[];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;
export const getAllProducts = state => state.products;
export const getProductById = id => state =>
  state.products.find(product => product.id === Number(id));

export default productsSlice.reducer;
