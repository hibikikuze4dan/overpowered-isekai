import { Typography } from "@material-ui/core";
import Interweave from "interweave";
import React from "react";

const TextComponent = ({ text, variant, matchers }) => {
  return (
    <Typography variant={variant}>
      <Interweave content={text} matchers={matchers} />
    </Typography>
  );
};

TextComponent.defaultProps = {
  text: "",
  variant: "body1",
  matchers: [],
};

export default TextComponent;
