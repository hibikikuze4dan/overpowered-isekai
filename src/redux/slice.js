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
    stand_powers: [],
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
      if (action.payload.title === "Stand") {
        state.stand_powers = [];
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
    updateSingleStandPower: (state, action) => {
      if (action.payload?.upgrades) {
        state.stand_powers = [action.payload];
      } else {
        const choiceIndex = state.stand_powers.findIndex((val) => {
          return val.title === action.payload.title;
        });
        state.stand_powers =
          choiceIndex !== -1
            ? [
                ...state.stand_powers.filter((val, ind) => {
                  return ind !== choiceIndex;
                }),
              ]
            : (state.stand_powers = [...state.stand_powers, action.payload]);
      }
    },
    updateMultiStandPower: (state, action) => {
      const firstPower = state.stand_powers[0];
      if (
        action.payload?.upgrades &&
        firstPower?.title !== action.payload.title
      ) {
        state.stand_powers = [action.payload];
      } else {
        const choiceIndex = state.stand_powers.findIndex((val) => {
          return val.title === action.payload.title;
        });
        if (choiceIndex !== -1 && !action.payload.increase) {
          state.stand_powers = [
            ...state.stand_powers.filter((val, ind) => {
              return ind !== choiceIndex;
            }),
          ];
        } else if (action.payload.increase) {
          state.stand_powers = [...state.stand_powers, action.payload];
        }
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
        location: state.location,
        data: cyoa_data,
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
  updateSingleStandPower,
  updateMultiStandPower,
  updateSingleDrawback,
  updateMultiDrawback,
  loadState,
} = dataSlice.actions;

export default dataSlice.reducer;
