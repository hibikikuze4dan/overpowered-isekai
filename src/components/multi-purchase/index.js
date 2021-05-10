import { Grid, IconButton, Typography } from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import { sum } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  disableStandPowersSection,
  getLocation,
  getLocationChoices,
} from "../../redux/selectors";
import {
  updateMultiDrawback,
  updateMultiPerk,
  updateMultiPower,
  updateMultiStandPower,
} from "../../redux/slice";

const MultiPurchaseComponent = ({ choice, disabled, limit }) => {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const locationBasedFuntions = {
    perks: updateMultiPerk,
    powers: updateMultiPower,
    stand_powers: updateMultiStandPower,
    drawbacks: updateMultiDrawback,
  };
  const sectionPurchases = useSelector(getLocationChoices);
  const purchases = sum(
    sectionPurchases.map((purchase) => {
      return purchase.title === choice.title ? 1 : 0;
    })
  );
  const shouldDisableStandPowersSection = useSelector(
    disableStandPowersSection
  );

  return (
    <Grid container justify="space-around" alignContent="center">
      <IconButton
        style={{ color: "inherit" }}
        disabled={purchases === 0 || shouldDisableStandPowersSection}
        onClick={() =>
          dispatch(
            locationBasedFuntions[location]({ ...choice, increase: false })
          )
        }
      >
        <RemoveCircle style={{ fontSize: "2rem" }} />
      </IconButton>
      <Typography
        style={{ fontWeight: 700, alignSelf: "center" }}
      >{`Purchases: ${purchases}`}</Typography>
      <IconButton
        style={{ color: "inherit" }}
        disabled={
          disabled || purchases === limit || shouldDisableStandPowersSection
        }
        onClick={() =>
          dispatch(
            locationBasedFuntions[location]({ ...choice, increase: true })
          )
        }
      >
        <AddCircle style={{ fontSize: "2rem" }} />
      </IconButton>
    </Grid>
  );
};

MultiPurchaseComponent.defaultProps = {
  purchases: 0,
};

export default MultiPurchaseComponent;
