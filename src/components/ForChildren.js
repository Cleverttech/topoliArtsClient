import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, Box, Link } from "@material-ui/core";

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

const imageStyle = {
  width: "280px",
  display: "flex",
  margin: "auto",
};
const FriedaCover = {
  width: "100%",
};
const sectionStyle = { width: "70%", margin: "auto" };
const friedaIntText = {
  margin: "20px",
};
const friedaIntBtn = {
  margin: "40px auto",
  width: " 400px",
};
function ForChildren() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={sectionStyle}>
      <Typography fontWeight="fontWeightLight">
        <Box textAlign="center" m={6}>
          <h4>Book Readings</h4>
        </Box>
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua.
          </p>
          <Button color="primary">
            <Link to="/">Schedule a Book Reading</Link>
          </Button>
        </Grid>

        <Grid item xs={6} fullWidth>
          <Box>
            <img
              fullWidth
              style={imageStyle}
              src="../assets/mädchen_intern.jpg"
              alt="book-reading-image"
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>
      <Typography fontWeight="fontWeightLight">
        <Box textAlign="center" m={6}>
          <h4>Frieda Interactive</h4>
        </Box>
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Grid>
            <img
              style={FriedaCover}
              src="../assets/AllBooks/Frieda/cover.png"
              alt="book-reading-image"
              loading="lazy"
            />
            <Box justifyContent="center">
              <Button href="#" variant="outlined" color="primary">
                View Frieda Vol.1
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            fullWidth
            style={FriedaCover}
            src="../assets/AllBooks/Frieda/coverband2.png"
            alt="book-reading-image"
            loading="lazy"
          />
          <Button href="#" variant="outlined" color="primary">
            View Frieda Vol.2
          </Button>
        </Grid>
        <Typography fontWeight="fontWeightLight" style={friedaIntText}>
          <Box textAlign="center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </Box>
          <Button href="#" color="primary" style={friedaIntBtn}>
            Frieda from the kids Perspective
          </Button>
        </Typography>
      </Grid>
    </div>
  );
}

export default ForChildren;
