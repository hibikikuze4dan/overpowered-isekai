import { Grid, Button } from "@material-ui/core";
import { startCase } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsekaiPointsMatcher } from "../../matchers/IsekaiPoints";
import { getLocation, getLocationData } from "../../redux/selectors";
import {
  setWorld,
  updateSinglePerk,
  updateStartingLocation,
} from "../../redux/slice";
import CardListComponent from "../card-list";
import OpenerComponent from "../opener";
import { randomNumber } from "./utils";

const SectionComponent = () => {
  const sectionData = useSelector(getLocationData);
  const location = useSelector(getLocation);
  const dispatch = useDispatch();
  const locationBasedFuntions = {
    perks: updateSinglePerk,
    world: setWorld,
    starting_location: updateStartingLocation,
  };
  const { title, description, choices } = sectionData;
  const onClick = () => {
    const ran = randomNumber(0, choices.length);

    dispatch(
      locationBasedFuntions[location]({
        random: true,
        ...choices[ran],
        cost: 0,
      })
    );
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <OpenerComponent
          title={title}
          description={description}
          matchers={[new IsekaiPointsMatcher("IP")]}
        />
        {sectionData.random && (
          <Grid container justify="center">
            <Button
              onClick={onClick}
              variant="outlined"
              style={{ color: "inherit" }}
            >
              Random {startCase(location)}
            </Button>
          </Grid>
        )}
        <CardListComponent />
      </Grid>
    </Grid>
  );
};

export default SectionComponent;
