import { configureStore, combineReducers } from "@reduxjs/toolkit";
import basketSlice from "./basket";

export const { addItem, removeItem, clear } = basketSlice.actions;

const rootReducer = combineReducers({
  basket: basketSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
