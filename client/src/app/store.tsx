import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Redux/features/CartSlice";

export const store = configureStore({
    reducer: {
      cart: CartReducer,
    },
  });
  