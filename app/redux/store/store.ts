import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import cartReducer from "../features/cart/cart-slice";
import favoritesSlice from "../features/favorites/favorites-slice";
import userReducer from "../features/user/user-slice";

const persistConfig = {
  key: "cart",
  timeout: 1,
  storage: storage,
  blacklist: ["cart", "favorites"],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedFavoritesReducer = persistReducer(persistConfig, favoritesSlice);

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: persistedReducer,
    favorites: persistedFavoritesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
