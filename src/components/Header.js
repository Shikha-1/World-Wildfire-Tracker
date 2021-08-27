import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    header: {
    position: "fixed",
    minHeight: "8vh",
    textAlign: "center",
    lineHeight: "8vh",
    padding: "1vh 0",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
      <AppBar className={classes.header}>
        <Typography variant="h5">Wildfires across the World</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Source:{" "}
          <a
            href="https://firms.modaps.eosdis.nasa.gov/map/"
            target="_blank"
            rel="noreferrer noopener"
          >
            www.nasa.gov
          </a>
        </Typography>
      </AppBar>
  );
}
