import {
  Grid,
  GridList,
  GridListTile,
  Typography,
  withWidth,
} from "@material-ui/core";
import { snakeCase } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { getLocationChoices } from "../../redux/selectors";

const CardListComponent = ({ width }) => {
  const cols = {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
  };
  const choices = useSelector(getLocationChoices);
  return (
    <Grid container>
      <GridList cols={cols[width]}>
        {choices.map((choice, index) => {
          console.log(choice);
          return (
            <GridListTile key={`card-list-${snakeCase(choice.title)}-${index}`}>
              <Typography>{choice.title}</Typography>;
            </GridListTile>
          );
        })}
      </GridList>
    </Grid>
  );
};

export default withWidth()(CardListComponent);
