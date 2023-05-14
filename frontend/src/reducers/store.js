import { configureStore, combineReducers } from "@reduxjs/toolkit";
import basketSlice from "./basket";
import gardensSlice from "./gardens";

export const { addItem, removeItem, clear } = basketSlice.actions;
export const { setItems } = gardensSlice.actions;

const rootReducer = combineReducers({
  basket: basketSlice.reducer,
  gardens: gardensSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
