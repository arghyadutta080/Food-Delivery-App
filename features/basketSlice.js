import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // every reducer function contains two parameters, state and action
    // state = initialState
    // action = action which we are dispatching, maybe id, image, name, price, etc.
    addToBasket: (state, action) => {
      // state.items = array of items (objects) in the basket
      // action.payload = item (object) which we are adding to the basket
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const newBasket = [...state.items];
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      state.items = newBasket;
    },
  },
})


// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;


export const selectBasketItemsWithId = (state, id) => {
  return (state.basket.items.filter((item) => {
    return (item.id === id)
  }))
};

export const selectBasketItems = (state) => {
  return (state.basket.items)
};

export const BasketTotal = (state) => {
  return (state.basket.items.reduce(calculate, 0))
};

const calculate = (total, item) => {
  return (total + item.price)
};
// console.log( "This is " + selectBasketItems)

export default basketSlice.reducer