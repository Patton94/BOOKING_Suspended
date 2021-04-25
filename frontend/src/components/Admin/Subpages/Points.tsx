import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

// ! STYLES
const useStyles = makeStyles(() => ({
  points__wrapper: {
    paddingTop: "30px",
    backgroundColor: "pink",
    height: "100vh",
  },
}));

// ! FUNCTION
const Points: React.FC = () => {
  const classes = useStyles();
  // ! RETURN
  return (
    <Grid
      className={classes.points__wrapper}
      container
      item
      xs={12}
      justify="center"
      alignItems="flex-start"
    ></Grid>
  );
};

export default Points;