import {createSlice} from '@reduxjs/toolkit';

const getLocalStorage = () => {
  if (typeof localStorage !== 'undefined') {
    return JSON.parse(localStorage.getItem("ShoppingCard"));
  }
  return null;
}
const initialState = getLocalStorage

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const Products = {
        count:1,
        id: action.payload.data.id,
        title: action.payload.data.title,
        price: action.payload.data.price,
        description:action.payload.data.description,
        category:action.payload.data.category,
        image: action.payload.data.image,
        rating:action.payload.data.rating,
      }
      console.log(Products)
      let courses = JSON.parse(localStorage.getItem('ShoppingCard'))
      if(!courses.some(el => el.id === action.payload.data.id)){
        courses.push(Products);
        localStorage.setItem('ShoppingCard', JSON.stringify(courses) )
      }


    },
    CounterPlus: (state,action) => {
     state[action.payload.action].count +=1;
     localStorage.setItem("ShoppingCard", JSON.stringify(state));
    },
    CounterSubtract: (state,action) => {
      if (state[action.payload.action].count > 1) {
        state[action.payload.action].count -= 1;
    } else {
        state[action.payload.action].count;
    }
      localStorage.setItem("ShoppingCard", JSON.stringify(state));
    },
    removeFromCart: (state,action) => {
      console.log(action.payload.index)
      state.splice(action.payload.index, 1);
      localStorage.setItem("ShoppingCard", JSON.stringify(state));
      console.log(state)
    },
    restCart: (state) => {
      state.splice(0, state.length);
      localStorage.setItem('ShoppingCard', JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  CounterPlus,
  CounterSubtract,
  restCart
} = cartSlice.actions;

export default cartSlice.reducer;
