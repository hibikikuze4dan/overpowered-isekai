import { Grid, IconButton, Typography } from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import { sum } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation, getLocationChoices } from "../../redux/selectors";
import { updateMultiPerk } from "../../redux/slice";

const MultiPurchaseComponent = ({ choice }) => {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const locationBasedFuntions = {
    perks: updateMultiPerk,
  };
  const sectionPurchases = useSelector(getLocationChoices);
  const purchases = sum(
    sectionPurchases.map((purchase) => {
      return purchase.title === choice.title ? 1 : 0;
    })
  );
  return (
    <Grid container justify="space-around" alignContent="center">
      <IconButton
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
