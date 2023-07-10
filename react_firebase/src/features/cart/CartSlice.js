import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  totalQuantity: 0,
  showCart: false,
};

//? redux toolkit use immer library to mutate the state by creating new copy

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.itemList.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // update quantity of exisiting product in cart
        existingItem.quantity += 1;
        existingItem.price += action.payload.price;
      } else {
        state.itemList.push({
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price,
          name: action.payload.name,
        });
        state.totalQuantity += 1;
      }
    },
    removeFromCart: (state, { payload }) => {
      const id = payload;
      const existingItem = state.itemList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity -= 1;
      } else {
        existingItem.quantity -= 1;
        existingItem.price -= existingItem.totalPrice;
      }
    },
    setShowCart: (state) => {
      state.showCart = state.showCart ? false : true;
    },
  },
});

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
