import { Grid, GridList, GridListTile, withWidth } from "@material-ui/core";
import { snakeCase } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { getLocationDataChoices } from "../../redux/selectors";
import CardComponent from "../card";

const CardListComponent = ({ width }) => {
  const cols = {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
  };
  const choices = useSelector(getLocationDataChoices) || [];
  return (
    <Grid container>
      <GridList
        style={{ justifyContent: "space-around" }}
        cols={cols[width]}
        spacing={8}
        cellHeight="auto"
      >
        {choices.map((choice, index) => {
          return (
            <GridListTile key={`card-list-${snakeCase(choice.title)}-${index}`}>
              <CardComponent choice={choice} />;
            </GridListTile>
          );
        })}
      </GridList>
    </Grid>
  );
};

export default withWidth()(CardListComponent);
