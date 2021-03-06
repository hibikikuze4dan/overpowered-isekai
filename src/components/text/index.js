import { Typography } from "@material-ui/core";
import Interweave from "interweave";
import React from "react";

const TextComponent = ({ text, variant }) => {
  return (
    <Typography variant={variant}>
      <Interweave content={text} />
    </Typography>
  );
};

TextComponent.defaultProps = {
  text: "",
  variant: "body1",
};

export default TextComponent;
