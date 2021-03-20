import { AppBar, Grid, IconButton, Typography } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllCostsSum, getStateData } from "../../redux/selectors";
import SaveDialogComponent from "../save-dialog";

const ApplicationBarComponent = () => {
  const [saveDialogOpen, toggleSaveDialog] = useState(false);
  const costs = useSelector(getAllCostsSum);
  const onSaveButtonClick = () => {
    toggleSaveDialog(!saveDialogOpen);
  };
  return (
    <AppBar position="static">
      <Grid container justify="space-around">
        <IconButton onClick={onSaveButtonClick}>
          <Save />
        </IconButton>
        <Typography style={{ alignSelf: "center" }}>{70 + costs}</Typography>
      </Grid>
      <SaveDialogComponent
        open={saveDialogOpen}
        onClose={() => toggleSaveDialog(!saveDialogOpen)}
      />
    </AppBar>
  );
};

export default ApplicationBarComponent;