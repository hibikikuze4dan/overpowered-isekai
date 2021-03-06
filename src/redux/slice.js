import { createSlice } from "@reduxjs/toolkit";
import cyoa_data from "../data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    location: window.location.href.split("/").pop(),
    data: cyoa_data,
    choices: {},
  },
  reducers: {
    updateLocation: (state, action) => {
      console.log(action);
      state.location = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  updateLocation,
} = dataSlice.actions;

export default dataSlice.reducer;
