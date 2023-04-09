import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import IProducts from "~/types/types";

interface favoritesState {
  favorites: IProducts[];
}

const initialState: favoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addTofavorites: (state, action: PayloadAction<IProducts>) => {
      state.favorites.push(action.payload);
    },

    //TODO: clear favorites after 3 days

    deleteItemFromfavorites: (state, action: PayloadAction<IProducts>) => {
      const id = action.payload.id;

      if (id) {
        state.favorites = state.favorites.filter((elem) => elem.id !== id);
      }
    },
  },
});

export const { addTofavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
