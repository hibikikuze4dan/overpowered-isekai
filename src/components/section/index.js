import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { IsekaiPointsMatcher } from "../../matchers/IsekaiPoints";
import { getLocationData } from "../../redux/selectors";
import OpenerComponent from "../opener";

const SectionComponent = () => {
  const sectionData = useSelector(getLocationData);
  const { title, description } = sectionData;
  return (
    <Grid container>
      <Grid item xs={12}>
        <OpenerComponent
          title={title}
          description={description}
          matchers={[new IsekaiPointsMatcher("IP")]}
        />
      </Grid>
    </Grid>
  );
};

export default SectionComponent;
