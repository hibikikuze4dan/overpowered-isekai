import { createSelector } from "reselect";

const getStateData = (state) => state.data;

export const getLocation = (state) => state.data.location;

const getData = createSelector(getStateData, (data) => data.data);

export const getLocationChoices = createSelector(
  getLocation,
  getStateData,
  (location, data) => data[location]
);

export const getLocationData = createSelector(
  getLocation,
  getData,
  (location, data) => {
    return data[location];
  }
);

export const getLocationDataChoices = createSelector(
  getLocationData,
  (data) => {
    return data.choices;
  }
);

export const getSectionTitlesArray = createSelector(getData, (data) => {
  return Object.keys(data);
});

export const getLeftRightNavigationArray = createSelector(
  getLocation,
  getSectionTitlesArray,
  (location, titles) => {
    const currentLocationIndex = titles.indexOf(location);
    const leftNav =
      currentLocationIndex - 1 < 0
        ? titles[titles.length - 1]
        : titles[currentLocationIndex - 1];
    return [leftNav, titles[(currentLocationIndex + 1) % titles.length]];
  }
);

export const getAllChoices = createSelector(getStateData, (data) => {
  return [
    ...data.perks,
    data.world,
    ...data.starting_location,
    ...data.powers,
    ...data.drawbacks,
  ];
});

export const getAllChoicesTitles = createSelector(getAllChoices, (choices) => {
  return choices.map((choice) => choice.title);
});
