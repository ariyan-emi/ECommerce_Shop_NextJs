import { configureStore } from '@reduxjs/toolkit';
import infoSliceReducer from "./slices/infoSlice";
import productsReducer from "./slices/productsSlice";
import isAuthReducer from "./slices/isAuthSlice";
import shoppingCartReducer from "./slices/shoppingCartSlice";

const store = configureStore({
  reducer: {
    info: infoSliceReducer,
    products: productsReducer,
    isAuth: isAuthReducer,
    shoppingCart: shoppingCartReducer,
  }
});

export default store;
