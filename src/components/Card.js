import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "20vh",
    left: "1vh",
    width: "300px",
    minHeight: "200px",
    padding: "20px",
    borderRadius: "10px",
    background: "#fff",
    fontSize: "18px",
    color: "#000"
  }
}));

const InfoCard = ({ info }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardHeader title="Location Info" />
        <Divider />
        <CardContent>
          <Typography variant="body1" component="h4">
            ID:{" "} {info.id}
          </Typography>
          <Typography variant="body1" component="h4">
            TITLE:{" "} {info.title.toUpperCase()}
          </Typography>
        </CardContent>
    </Card>
  );
}

export default InfoCard
