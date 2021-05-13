import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ForChildren() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ width: "80%", margin: "auto" }}>
      <Typography component="div" fontWeight="fontWeightLight">
        <Box textAlign="center" m={1}>
          Book Readings
        </Box>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </p>
        </Grid>
        <Grid item xs={6}>
          <img
            style={{ width: "60%" }}
            src="../assets/mädchen_intern.jpg"
            alt="book-reading-image"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ForChildren;
