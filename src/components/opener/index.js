import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import TextComponent from "../text";

const OpenerComponent = ({ title, description, matchers }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <TextComponent text={title} variant="h3" />
      </Grid>
      <Grid item xs={12}>
        {description.map((descriptionText, ind) => {
          return (
            <Fragment key={`opener-description-${ind}`}>
              <TextComponent text={descriptionText} matchers={matchers} />
              <br />
            </Fragment>
          );
        })}
      </Grid>
    </Grid>
  );
};

OpenerComponent.defaultProps = {
  title: "hello",
  description: [""],
  matchers: [],
};

export default OpenerComponent;
