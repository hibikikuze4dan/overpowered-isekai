import { Typography } from "@material-ui/core";
import React from "react";

const CostComponent = ({ cost }) => {
  return (
    <Typography style={{ fontWeight: 700 }}>
      {cost < 0 ? "Cost: " : "Gain: "}
      <span className="Interweave-Green">{cost}</span>
    </Typography>
  );
};

export default CostComponent;
