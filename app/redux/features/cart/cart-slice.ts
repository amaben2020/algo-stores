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
      if (action.payload.id) {
        const itemToUpdate = state.items.findIndex(
          (product) => product.id === action.payload.id,
        );

        state.items[itemToUpdate].quantity = action.payload.quantity;
      }
    },
    // deleteItemFromCart: (state, action: PayloadAction<IProducts>) => {},
  },
});

export const { addToCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
