import { Grid } from "@material-ui/core";
import React from "react";
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
            <>
              <TextComponent
                key={`opener-description-${ind}`}
                text={descriptionText}
                matchers={matchers}
              />
              <br />
            </>
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
