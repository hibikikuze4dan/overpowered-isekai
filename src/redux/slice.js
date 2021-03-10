import { createSlice } from "@reduxjs/toolkit";
import cyoa_data from "../data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    location: window.location.href.split("/").pop(),
    data: cyoa_data,
    perks: [],
    world: {},
  },
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updateSinglePerk: (state, action) => {
      const choiceIndex = state.perks.findIndex((val) => {
        return val.title === action.payload.title;
      });
      if (choiceIndex !== -1) {
        state.perks = [
          ...state.perks.filter((val, ind) => {
            return ind !== choiceIndex;
          }),
        ];
      } else {
        state.perks = [...state.perks, action.payload];
      }
    },
    updateMultiPerk: (state, action) => {
      const choiceIndex = state.perks.findIndex((val) => {
        return val.title === action.payload.title;
      });
      if (choiceIndex !== -1 && !action.payload.increase) {
        state.perks = [
          ...state.perks.filter((val, ind) => {
            return ind !== choiceIndex;
          }),
        ];
      } else if (action.payload.increase) {
        state.perks = [...state.perks, action.payload];
      }
    },
    setWorld: (state, action) => {
      state.world = action.payload;
    },
  },
});

export const {
  updateLocation,
  updateSinglePerk,
  updateMultiPerk,
  setWorld,
} = dataSlice.actions;

export default dataSlice.reducer;
