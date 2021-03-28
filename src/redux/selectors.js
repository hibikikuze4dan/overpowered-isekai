import { omit } from "lodash";
import { createSelector } from "reselect";

export const getStateData = (state) => state.data;

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

const getPowers = createSelector(getStateData, (data) => data.powers);
const getStandPowers = createSelector(
  getStateData,
  (data) => data.stand_powers
);

export const getSectionTitlesArrayWithExclusions = createSelector(
  getSectionTitlesArray,
  getPowers,
  (titles, powers) => {
    return powers.find((power) => power.title === "Stand")
      ? titles
      : titles.filter((title) => title !== "stand_powers");
  }
);

export const disableStandPowersSection = createSelector(
  getPowers,
  getLocation,
  (powers, location) =>
    !powers.find((power) => power.title === "Stand") &&
    location === "stand_powers"
);

export const getAllPurchasesObject = createSelector(getStateData, (data) => {
  return omit(data, ["location, data"]);
});

const getAllPurchasesObjectExcludingSaveTitle = createSelector(
  getAllPurchasesObject,
  (obj) => omit(obj, ["saveTitle"])
);

export const getAllCosts = createSelector(
  getAllPurchasesObjectExcludingSaveTitle,
  (obj) => {
    return [
      ...obj.perks,
      ...obj.starting_location,
      ...obj.drawbacks,
      ...obj.powers,
      ...obj.stand_powers,
      obj.world,
    ].map((purchase) => purchase?.cost || 0);
  }
);

const getStandPointsModifier = createSelector(getStandPowers, (powers) =>
  powers.length > 0 ? 5 : 0
);

export const getAllCostsSum = createSelector(
  getAllCosts,
  getStandPointsModifier,
  (costs, standModifier) => {
    return (
      costs.reduce((acc, curr) => {
        return curr + acc;
      }, 0) + standModifier
    );
  }
);

export const getAllChoicesTitles = createSelector(getAllChoices, (choices) => {
  return choices.map((choice) => choice.title);
});

export const getSaveTitle = createSelector(getStateData, (data) => {
  return data.saveTitle;
});
