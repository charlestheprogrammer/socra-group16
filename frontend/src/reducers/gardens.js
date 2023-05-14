import { createSlice } from "@reduxjs/toolkit";

const gardensSlice = createSlice({
  name: "gardens",
  initialState: {
    items: [],
    fetched: false,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload.gardens;
      state.fetched = true;
    },
  },
});

export default gardensSlice;
