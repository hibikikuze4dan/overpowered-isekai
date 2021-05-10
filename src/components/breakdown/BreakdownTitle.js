import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getSaveTitle } from "../../redux/selectors";

const BreakdownTitleComponent = () => {
  const saveTitle = useSelector(getSaveTitle);
  return (
    <Grid container justify="center">
      <Typography>{saveTitle ? saveTitle : "Build Breakdown"}</Typography>
    </Grid>
  );
};

export default BreakdownTitleComponent;
