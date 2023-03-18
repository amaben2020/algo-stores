import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import IProducts from "~/types/types";

interface favoritesState {
  items: IProducts[];
}

const initialState: favoritesState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addTofavorites: (state, action: PayloadAction<IProducts>) => {
      state.items.push(action.payload);
    },

    //TODO: clear favorites after 3 days

    updatefavorites: (state, action: PayloadAction<IProducts>) => {
      const itemToUpdate = state.items.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (action.payload.id && action.payload?.quantity >= 1) {
        state.items[itemToUpdate].quantity = Number(action.payload.quantity);
      }
    },
    // deleteItemFromfavorites: (state, action: PayloadAction<IProducts>) => {},
  },
});

export const { addTofavorites, updatefavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
