import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@material-ui/core";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "87%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },

  img: {
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
  stepper: {
    position: "relative",
    top: -32,
    backgroundColor: "transparent",
  },
  buttonsContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    margin: "0 8px",
  },

}));


function SwipeableTextMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const tutorialSteps = props.images
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  const gridStyle = {
    height:"auto",
    margin: "auto",
    width:"100vw"
  }; 

  return (
    <Grid className={classes.root} style={gridStyle}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <div className={classes.buttons}>
          <IconButton
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            className={classes.button}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className={classes.button}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
        </div>
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        className={classes.stepper}
        backButton={<div />}
        nextButton={<div />}
      />
    </Grid>
  );
}

export default SwipeableTextMobileStepper;
