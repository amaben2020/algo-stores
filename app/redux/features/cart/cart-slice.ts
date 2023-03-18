import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import IProducts from "~/types/types";

interface cartState {
  items: IProducts[];
}

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProducts>) => {
      state.items.push(action.payload);
    },

    //TODO: update cart with quantity
    updateCart: (state, action: PayloadAction<IProducts>) => {
      const itemToUpdate = state.items.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (action.payload.id && action.payload?.quantity >= 1) {
        state.items[itemToUpdate].quantity = Number(action.payload.quantity);
      }
    },
    deleteItemFromCart: (state, action: PayloadAction<IProducts>) => {
      state.items = state.items.filter(
        (elem: IProducts) => elem.id !== Number(action.payload.id),
      );
    },
  },
});

export const { addToCart, updateCart, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
