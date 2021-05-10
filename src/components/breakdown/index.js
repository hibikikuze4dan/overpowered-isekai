import { Dialog, Grid } from "@material-ui/core";
import React from "react";
import BreakdownListComponent from "./BreakdownList";

import BreakdownTitle from "./BreakdownTitle";

const BreakdownModalComponent = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Grid container spacing={4} style={{ padding: "16px 24px" }}>
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
