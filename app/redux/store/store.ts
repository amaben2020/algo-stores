import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import cartReducer from "../features/cart/cart-slice";
import userReducer from "../features/user/user-slice";

const persistConfig = {
  key: "cart",
  timeout: 1,
  storage: storage,
  blacklist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: persistedReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
