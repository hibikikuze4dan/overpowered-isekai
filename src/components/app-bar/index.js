import { AppBar, IconButton } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getStateData } from "../../redux/selectors";
import SaveDialogComponent from "../save-dialog";

const ApplicationBarComponent = () => {
  const [saveDialogOpen, toggleSaveDialog] = useState(false);
  const data = useSelector(getStateData);
  console.log(data);
  const onClick = () => {
    window.localStorage.setItem("savedata", JSON.stringify(data));
    console.log(window.localStorage);
    toggleSaveDialog(!saveDialogOpen);
  };
  return (
    <AppBar position="static">
      <IconButton onClick={onClick}>
        <Save />
      </IconButton>
      <SaveDialogComponent
        open={saveDialogOpen}
        onClose={() => toggleSaveDialog(!saveDialogOpen)}
      />
    </AppBar>
  );
};

export default ApplicationBarComponent;
