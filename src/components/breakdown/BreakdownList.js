import { Grid, Typography } from "@material-ui/core";
import { map, startCase } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { getPurchasesForBreakdown } from "../../redux/selectors";

const BreakdownListComponent = () => {
  const sectionPurchases = useSelector(getPurchasesForBreakdown);

  return (
    <Grid container spacing={4}>
      {map(sectionPurchases, (purchases, index) => {
        return (
          <Grid item xs={12} key={`purchases-${index}`}>
            <Grid container>
              <Typography variant="h5">{`${startCase(index)}:`}</Typography>
            </Grid>
            <Grid container>
              <Typography>{`${purchases}`}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BreakdownListComponent;
