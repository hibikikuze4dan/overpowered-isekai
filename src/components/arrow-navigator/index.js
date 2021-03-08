import { Grid, IconButton } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLeftRightNavigationArray } from "../../redux/selectors";
import { updateLocation } from "../../redux/slice";

const ArrowNavigatorComponent = () => {
  const dispatch = useDispatch();
  const lrNavArray = useSelector(getLeftRightNavigationArray);
  return (
    <Grid container justify="space-between">
      <IconButton
        component={Link}
        to={lrNavArray[0]}
        onClick={() => dispatch(updateLocation(lrNavArray[0]))}
        style={{ color: "#FFFFFFFF" }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        component={Link}
        to={lrNavArray[1]}
        onClick={() => dispatch(updateLocation(lrNavArray[1]))}
        style={{ color: "#FFFFFFFF" }}
      >
        <ArrowForward />
      </IconButton>
    </Grid>
  );
};

export default ArrowNavigatorComponent;
