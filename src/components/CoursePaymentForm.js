import React from "react";

import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function CoursePaymentForm() {
  const classes = useStyles();

  const paperStyle = {
    padding: "30px 20px",
    width: 375,
    margin: "30px auto",
  };

  const avatarStyle = {
    backgroundColor: "#7f7f7f",
  };
  const btnStyle = {
    marginTop: "20px",
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <CreditCardIcon />
          </Avatar>
          <h2>Course Name goes here!</h2>
          <Typography variant="caption" gutterBottom>
            Price goes here
          </Typography>
        </Grid>

        <form>
          <TextField
            as={TextField}
            name="fullname"
            fullWidth
            label="Fullname"
            placeholder="Enter fullname"
          />
          <TextField
            as={TextField}
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter Email"
          />
          <TextField
            as={TextField}
            name="telephone"
            fullWidth
            label="Telephone"
            placeholder="Enter email"
          />
          <TextField as={TextField} name="message" fullWidth label="Message" />

          <TextField
            as={TextField}
            name="message"
            fullWidth
            label="Message"
            type="text"
          />
          <FormControlLabel
            control={<Field as={Checkbox} name="termsAndConditions" />}
            label="I accept the terms and conditions"
          />
          <Button
            style={btnStyle}
            type="submit"
            variant="contained"
            color="primary"
          >
            Continue
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default CoursePaymentForm;
