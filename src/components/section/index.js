import {
  Grid,
  Button,
  Snackbar,
  withWidth,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { startCase } from "lodash";
import React, { useState } from "react";
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

const SectionComponent = ({ width }) => {
  const [isSnackOpen, toggleSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
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
    setSnackMessage(`${choices[ran].title} picked.`);
    toggleSnackOpen(true);
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
              style={{
                color: "inherit",
                border: "1px solid white",
                marginBottom: "12px",
              }}
            >
              Random {startCase(location)}
            </Button>
          </Grid>
        )}
        <CardListComponent />
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isSnackOpen}
        onClose={(e, reason) => {
          if (reason === "clickaway") {
            return;
          }
          toggleSnackOpen(false);
        }}
        message={snackMessage}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => toggleSnackOpen(false)}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Grid>
  );
};

export default withWidth()(SectionComponent);
