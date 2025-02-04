import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice, //cart slice
    search: SearchSlice, //search slice
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
