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
    // updateCart: (state, action: PayloadAction<IProducts>) => {},
    // deleteItemFromCart: (state, action: PayloadAction<IProducts>) => {},
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
