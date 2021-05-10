import { Dialog, Grid } from "@material-ui/core";
import React from "react";
import BreakdownListComponent from "./BreakdownList";

import BreakdownTitle from "./BreakdownTitle";

const BreakdownModalComponent = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Grid container>
        <Grid item xs={12}>
          <BreakdownTitle />
        </Grid>
        <Grid item xs={12}>
          <BreakdownListComponent />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default BreakdownModalComponent;
