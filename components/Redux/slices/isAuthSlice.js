import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const isAuthSlice = createSlice({
  name: "is Authenticated",
  initialState,
  reducers: {
    setIsAuth: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setIsAuth } = isAuthSlice.actions;
export const getIsAuth = state => state.isAuth;

export default isAuthSlice.reducer;
