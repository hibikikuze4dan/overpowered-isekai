import { createSelector } from "reselect";

const getStateData = (state) => state.data;

export const getLocation = (state) => state.data.location;

const getData = createSelector(getStateData, (data) => data.data);

export const getLocationData = createSelector(
  getLocation,
  getData,
  (location, data) => {
    return data[location];
  }
);

export const getSectionTitlesArray = createSelector(getData, (data) => {
  return Object.keys(data);
});
