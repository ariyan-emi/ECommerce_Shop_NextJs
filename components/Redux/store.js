import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './cartSlice';
import infoSliceReducer from "./infoSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    info: infoSliceReducer,
  }
});

export default store;
