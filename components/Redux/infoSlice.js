import {createSlice} from '@reduxjs/toolkit';


let initialState = ''

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    getState: (state,action) => {
      state = action.payload.data
      initialState = action.payload.data
      return state
    }
  },
});

export const {
  getState
} = infoSlice.actions;

export default infoSlice.reducer;
