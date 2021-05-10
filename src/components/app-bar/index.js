import {
  AppBar,
  Grid,
  IconButton,
  Typography,
  withWidth,
} from "@material-ui/core";
import { Save, List } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllCostsSum, getStateData } from "../../redux/selectors";
import BreakdownModalComponent from "../breakdown";
import SaveDialogComponent from "../save-dialog";

const ApplicationBarComponent = ({ width }) => {
  const [saveDialogOpen, toggleSaveDialog] = useState(false);
  const [isBreakdownDialogOpen, toggleBreakdownDialog] = useState(false);
  const costs = useSelector(getAllCostsSum);
  const onSaveButtonClick = () => {
    toggleSaveDialog(!saveDialogOpen);
  };
  return (
    <AppBar position="fixed">
      <Grid container justify="space-around">
        <IconButton onClick={onSaveButtonClick}>
          <Save />
        </IconButton>
        <IconButton
          onClick={() => toggleBreakdownDialog(!isBreakdownDialogOpen)}
        >
          <List />
        </IconButton>
        <Typography style={{ alignSelf: "center" }}>
          {["xs", "sm"].includes(width) ? "IP: " : "Isekai Points: "}
          {70 + costs}
        </Typography>
      </Grid>
      <SaveDialogComponent
        open={saveDialogOpen}
        onClose={() => toggleSaveDialog(!saveDialogOpen)}
      />
      <BreakdownModalComponent
        open={isBreakdownDialogOpen}
        onClose={() => toggleBreakdownDialog(!isBreakdownDialogOpen)}
      />
    </AppBar>
  );
};

export default withWidth()(ApplicationBarComponent);
