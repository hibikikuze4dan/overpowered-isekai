import { Button, Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import Text from "../text";
import CostComponent from "../cost";
import { CardDescriptionMatcher } from "../../matchers/CardDescription";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllChoicesTitles,
  getLocation,
  getLocationChoices,
} from "../../redux/selectors";
import {
  updateSinglePerk,
  setWorld,
  updateStartingLocation,
  updateSinglePower,
  updateSingleDrawback,
} from "../../redux/slice";
import MultiPurchaseComponent from "../multi-purchase";
import { isUpgradeDisabled, requirementsMet } from "./utils";
import { sum } from "lodash";

const CardBodyComponent = ({ choice, disabled, limit, include, exclude }) => {
  const incString = (
    <>
      <span className="Interweave-Red">{include[0]}</span>
      {include[1] && (
        <>
          {" "}
          or <span className="Interweave-Red">{include[1]}</span>
        </>
      )}
      {include[0] && exclude[0] !== undefined && exclude[1] === undefined
        ? " and "
        : ""}
      {exclude[0] !== undefined && exclude[1] !== undefined ? ", " : ""}
    </>
  );
  const renderRequirements = include.length !== 0 || exclude.length !== 0;
  const exString = (
    <span className="Requirements-String">
      Requirement: {incString}
      {exclude[0] && (
        <>
          Not <span className="Interweave-Red">{exclude[0]}</span>
        </>
      )}
      {exclude[1] && (
        <>
          {" "}
          and Not <span className="Interweave-Red">{exclude[1]}</span>
        </>
      )}
    </span>
  );
  return (
    <Grid container>
      <Grid item xs={12}>
        <Text text={choice.title} />
      </Grid>
      {renderRequirements && (
        <Grid item xs={12}>
          {exString}.
        </Grid>
      )}
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
    drawbacks: updateSingleDrawback,
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
  const include = choice?.include || [];
  const exclude = choice?.exclude || [];
  const purchaseTitles = useSelector(getAllChoicesTitles);
  const areRequirementsMet = requirementsMet(purchaseTitles, include, exclude);
  return (
    <Grid container>
      <CardWrapper
        onClick={onClick}
        disabled={!areRequirementsMet}
        fullWidth={choice.multi ? null : true}
        style={{ color: "#FFFFFFFF", backgroundColor: backgroundColor(picked) }}
      >
        <CardBodyComponent
          include={include}
          exclude={exclude}
          disabled={!areRequirementsMet}
          choice={choice}
        />
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
                  disabled={
                    isUpgradeDisabled(picked, upgradePicked) ||
                    !areRequirementsMet
                  }
                  fullWidth={choice.multi ? null : true}
                  style={{
                    color: "#FFFFFFFF",
                    backgroundColor: backgroundColor(upgradePicked),
                  }}
                >
                  <CardBodyComponent
                    include={include}
                    exclude={exclude}
                    limit={timesParentPicked}
                    disabled={
                      isUpgradeDisabled(picked, upgradePicked) ||
                      !areRequirementsMet
                    }
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
