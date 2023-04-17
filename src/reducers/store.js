import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket";

export const { addItem, removeItem, clear } = basketSlice.actions;

const store = configureStore({
  reducer: basketSlice.reducer,
});

export default store;
