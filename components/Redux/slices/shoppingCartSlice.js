import { createSlice } from "@reduxjs/toolkit";
import { ref, set } from "firebase/database";
import { db } from "../../../firebase/firebase";

const initialState = [];

export const shoppingCartSlice = createSlice({
  name: "shopping-cart",
  initialState,
  reducers: {
    setOrFirstAddToCart: (state, action) => action.payload || [],
    minusOrAddExtraItem: (state, action) => {
      const { productIndex, product } = action.payload;
      state[productIndex] = product;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrFirstAddToCart, minusOrAddExtraItem } =
  shoppingCartSlice.actions;

//get functions
export const isItemInCart = id => state =>
  state.shoppingCart.some(product => product.id === id);
export const totalCartItems = state =>
  state.shoppingCart.reduce((a, product) => a + product.items, 0);

// ------------------ thunk ------------------ \\
export const addToCartAsync = (product, uid) => (dispatch, getState) => {
  // add to database
  const productToSet = { ...product, items: 1, totalPrice: product.price };
  const valueToSet = structuredClone(getState().shoppingCart);
  valueToSet.push(productToSet);
  set(ref(db, `users/${uid}/cart`), valueToSet)
    .then(() => dispatch(setOrFirstAddToCart(valueToSet)))
    .catch(err => console.log(err.message));
};

export const deleteItemFromCart = (id, uid) => (dispatch, getState) => {
  const state = structuredClone(getState().shoppingCart);
  const productIndex = state.findIndex(product => product.id === id);
  state.splice(productIndex, 1);
  set(ref(db, `users/${uid}/cart`), state)
    .then(() => dispatch(setOrFirstAddToCart(state)))
    .catch(err => console.log(err.message));
};
export const deleteAllItemsFromCart = (uid) => (dispatch, getState) => {
  const state = structuredClone(getState().shoppingCart);
  state.splice(0, state.length);
  set(ref(db, `users/${uid}/cart`), state)
      .then(() => dispatch(setOrFirstAddToCart(state)))
      .catch(err => console.log(err.message));
};

export const addExtraItemAsync = (id, uid) => (dispatch, getState) => {
  const state = structuredClone(getState().shoppingCart);
  const productIndex = state.findIndex(product => product.id === id);
  const product = { ...state[productIndex] };
  product.items++;
  product.totalPrice = product.price * product.items;

  set(ref(db, `users/${uid}/cart/${productIndex}`), product)
    .then(() => dispatch(minusOrAddExtraItem({ productIndex, product })))
    .catch(err => console.log(err.message));
};

export const minusItemAsync = (id, uid) => (dispatch, getState) => {
  const state = structuredClone(getState().shoppingCart);
  const productIndex = state.findIndex(product => product.id === id);
  const product = { ...state[productIndex] };
  product.items--;
  product.totalPrice = product.price * product.items;

  set(ref(db, `users/${uid}/cart/${productIndex}`), product)
    .then(() => dispatch(minusOrAddExtraItem({ productIndex, product })))
    .catch(err => console.log(err.message));
};

// ------------------ thunk ------------------ \\
export default shoppingCartSlice.reducer;
