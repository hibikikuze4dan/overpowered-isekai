import { Button, Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import Text from "../text";
import CostComponent from "../cost";
import { CardDescriptionMatcher } from "../../matchers/CardDescription";
import { useDispatch, useSelector } from "react-redux";
import { getLocation, getLocationChoices } from "../../redux/selectors";
import {
  updateSinglePerk,
  setWorld,
  updateStartingLocation,
  updateSinglePower,
} from "../../redux/slice";
import MultiPurchaseComponent from "../multi-purchase";
import { isUpgradeDisabled } from "./utils";
import { sum } from "lodash";

const CardBodyComponent = ({ choice, disabled, limit }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Text text={choice.title} />
      </Grid>
      <Grid item xs={12}>
        <CostComponent cost={choice.cost} />
      </Grid>
      {choice.multi && (
        <Grid item xs={12}>
          <MultiPurchaseComponent
            disabled={disabled}
            choice={choice}
            limit={limit}
          />
        </Grid>
      )}
      <Grid item xs={12}>
        {/* Maybe Make Description Component */}
        {choice.description.map((descriptionText, ind) => {
          return (
            <Fragment key={`opener-description-${ind}`}>
              <Text
                text={descriptionText}
                matchers={[new CardDescriptionMatcher("IP")]}
              />
              <br />
            </Fragment>
          );
        })}
      </Grid>
    </Grid>
  );
};

CardBodyComponent.defaultProps = {
  disabled: false,
};

const CardComponent = ({ choice }) => {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const locationBasedFuntions = {
    perks: updateSinglePerk,
    world: setWorld,
    starting_location: updateStartingLocation,
    powers: updateSinglePower,
  };
  const upgrades = choice?.upgrades || [];
  const onClick = choice.multi
    ? null
    : () =>
        dispatch(locationBasedFuntions[location]({ ramdom: false, ...choice }));
  const CardWrapper = choice.multi ? Grid : Button;
  const sectionPurchases = useSelector(getLocationChoices);
  const picked = Array.isArray(sectionPurchases)
    ? sectionPurchases.some((purchase) => purchase.title === choice.title)
    : sectionPurchases.title === choice.title;
  const timesParentPicked = Array.isArray(sectionPurchases)
    ? sum(
        sectionPurchases.map((purchase) =>
          purchase.title === choice.title ? 1 : 0
        )
      )
    : 0;

  const backgroundColor = (ispicked) => (ispicked ? "green" : "inherit");
  return (
    <Grid container>
      <CardWrapper
        onClick={onClick}
        fullWidth
        style={{ color: "#FFFFFFFF", backgroundColor: backgroundColor(picked) }}
      >
        <CardBodyComponent choice={choice} />
      </CardWrapper>
      <Grid item xs={12}>
        <Grid container>
          {upgrades.map((upgrade, index) => {
            const upgradeOnClick = upgrade.multi
              ? null
              : () => dispatch(locationBasedFuntions[location](upgrade));
            const upgradePicked = sectionPurchases.some(
              (purchase) => purchase.title === upgrade.title
            );
            const UpgradeCardWrapper = upgrade.multi ? Grid : Button;

            return (
              <Grid key={`choice-card-upgrade-${index}`} item xs={12}>
                <UpgradeCardWrapper
                  onClick={upgradeOnClick}
                  disabled={isUpgradeDisabled(picked, upgradePicked)}
                  fullWidth
                  style={{
                    color: "#FFFFFFFF",
                    backgroundColor: backgroundColor(upgradePicked),
                  }}
                >
                  <CardBodyComponent
                    limit={timesParentPicked}
                    disabled={isUpgradeDisabled(picked, upgradePicked)}
                    choice={upgrade}
                  />
                </UpgradeCardWrapper>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardComponent;
