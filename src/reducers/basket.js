import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    nbOfItems: 0,
    mapOfExistingItems: {},
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.mapOfExistingItems[action.payload.id]) {
        return;
      }
      (state.mapOfExistingItems[action.payload.id] = true),
        (state.nbOfItems += 1),
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      if (!state.mapOfExistingItems[action.payload.id]) {
        return;
      }
      (mapOfExistingItems[action.payload.id] = false),
        (state.nbOfItems -= 1),
        (state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        ));
    },
    clear: (state) => {
      (state.nbOfItems = 0),
        (state.items = []),
        (state.mapOfExistingItems = {});
    },
  },
});

export default basketSlice;
