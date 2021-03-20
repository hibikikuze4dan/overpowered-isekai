import { createSlice } from "@reduxjs/toolkit";
import cyoa_data from "../data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    location: window.location.href.split("/").pop(),
    data: cyoa_data,
    saveTitle: "",
    perks: [],
    world: {},
    starting_location: [],
    powers: [],
    drawbacks: [],
  },
  reducers: {
    updateSaveTitle: (state, action) => {
      state.saveTitle = action.payload;
    },
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
    updateStartingLocation: (state, action) => {
      const choiceIndex = state.starting_location.findIndex((val) => {
        return val.title === action.payload.title;
      });
      if (action.payload.parent) {
        state.starting_location = [action.payload];
      } else if (choiceIndex !== -1) {
        state.starting_location = [
          ...state.starting_location.filter((val, ind) => {
            return ind !== choiceIndex;
          }),
        ];
      } else {
        state.starting_location = [...state.starting_location, action.payload];
      }
    },
    updateSinglePower: (state, action) => {
      const choiceIndex = state.powers.findIndex((val) => {
        return val.title === action.payload.title;
      });
      if (choiceIndex !== -1) {
        state.powers = [
          ...state.powers.filter((val, ind) => {
            return ind !== choiceIndex;
          }),
        ];
      } else {
        state.powers = [...state.powers, action.payload];
      }
    },
    updateMultiPower: (state, action) => {
      const choiceIndex = state.powers.findIndex((val) => {
        return val.title === action.payload.title;
      });
      if (choiceIndex !== -1 && !action.payload.increase) {
        state.powers = [
          ...state.powers.filter((val, ind) => {
            return ind !== choiceIndex;
          }),
        ];
      } else if (action.payload.increase) {
        state.powers = [...state.powers, action.payload];
      }
    },
    updateSingleDrawback: (state, action) => {
      const choiceIndex = state.drawbacks.findIndex((val) => {
        return val.title === action.payload.title;
      });
      if (choiceIndex !== -1) {
        state.drawbacks = [
          ...state.drawbacks.filter((val, ind) => {
            return ind !== choiceIndex;
          }),
        ];
      } else {
        state.drawbacks = [...state.drawbacks, action.payload];
      }
    },
    updateMultiDrawback: (state, action) => {
      const choiceIndex = state.drawbacks.findIndex((val) => {
        return val.title === action.payload.title;
      });
      if (choiceIndex !== -1 && !action.payload.increase) {
        state.drawbacks = [
          ...state.drawbacks.filter((val, ind) => {
            return ind !== choiceIndex;
          }),
        ];
      } else if (action.payload.increase) {
        state.drawbacks = [...state.drawbacks, action.payload];
      }
    },
    loadState: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {
  updateSaveTitle,
  updateLocation,
  updateSinglePerk,
  updateMultiPerk,
  setWorld,
  updateStartingLocation,
  updateSinglePower,
  updateMultiPower,
  updateSingleDrawback,
  updateMultiDrawback,
  loadState,
} = dataSlice.actions;

export default dataSlice.reducer;