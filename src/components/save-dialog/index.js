import {
  Button,
  Dialog,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSaveTitle, getAllPurchasesObject } from "../../redux/selectors";
import { loadState, updateSaveTitle } from "../../redux/slice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

const SaveDialogComponent = ({ open, onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const saveTitle = useSelector(getSaveTitle);
  const [selectVal, updateSelectVal] = useState(saveTitle);
  const [deleteVal, updateDeleteVal] = useState("");
  const currentPurchases = useSelector(getAllPurchasesObject);
  const saves = window.localStorage.getItem("saveData") || "[]";
  const saveData = JSON.parse(saves);
  const titles = saveData.map((save) => save.saveTitle);
  const onSaveClick = () => {
    const overwriteIndex = saveData.findIndex((save) => {
      return save.saveTitle === saveTitle;
    });
    window.localStorage.setItem(
      "saveData",
      JSON.stringify([
        ...saveData.filter((save, index) => {
          return index !== overwriteIndex;
        }),
        currentPurchases,
      ])
    );
    onClose();
  };
  const onLoadClick = () => {
    dispatch(loadState(saveData.find((save) => save.saveTitle === selectVal)));
    onClose();
  };
  const onDeleteClick = () => {
    window.localStorage.setItem(
      "saveData",
      JSON.stringify([
        ...saveData.filter((save) => {
          return save.saveTitle !== deleteVal;
        }),
      ])
    );
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Grid container justify="space-around">
            <Grid item xs={6}>
              <TextField
                className={classes.formControl}
                label="Save Title"
                placeholder="Please Enter Save Title"
                value={saveTitle}
                onChange={(e) => dispatch(updateSaveTitle(e.target.value))}
              />
            </Grid>
            <Button disabled={saveTitle === ""} onClick={onSaveClick}>
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-around">
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Save to Load</InputLabel>
                <Select
                  label="save name"
                  onChange={(e) => updateSelectVal(e.target.value)}
                  value={selectVal}
                >
                  <MenuItem value="">*Choose a Save*</MenuItem>
                  {titles.map((title, index) => {
                    console.log(title);
                    return (
                      <MenuItem
                        value={title}
                        key={`menu-item-select-item-${index}`}
                      >
                        {title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Button disabled={selectVal === ""} onClick={onLoadClick}>
              Load
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-around">
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Save to Delete</InputLabel>
                <Select
                  label="save name for deletion"
                  onChange={(e) => updateDeleteVal(e.target.value)}
                  value={deleteVal}
                >
                  <MenuItem value="">*Choose a Save*</MenuItem>
                  {titles.map((title, index) => {
                    console.log(title);
                    return (
                      <MenuItem
                        value={title}
                        key={`menu-item-select-item-${index}`}
                      >
                        {title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Button disabled={deleteVal === ""} onClick={onDeleteClick}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default SaveDialogComponent;
