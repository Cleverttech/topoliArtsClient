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
import { Formik, Field, Form, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, Checkbox, FormHelperText } from "@material-ui/core";
import * as Yup from "yup";

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
  //Validation starts here
  const initialValues = {
    fullname: "",
    countrycode: "",
    email: "",
    telephone: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "username too short")
      .required("Full name is required!"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required!"),
    countrycode: Yup.number()
      .max(4, "Enter a minimum phone number")
      .required("Country code is required!"),
    telephone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .required("Telephone number is required!")
      .positive()
      .min(7),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Please accept terms & conditions!"
    ),
  });

  //handle Button onClick
  const handleOnClick = {};

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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          //add onclick event
        >
          <Form>
            <TextField
              as={TextField}
              name="fullname"
              fullWidth
              label="Fullname"
              placeholder="Enter fullname"
              helperText={
                <ErrorMessage name="fullname">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              }
            />
            <TextField
              as={TextField}
              name="email"
              fullWidth
              label="Email"
              placeholder="Enter Email"
              helperText={
                <ErrorMessage name="email">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              }
            />
            <TextField
              as={TextField}
              name="countrycode"
              fullWidth
              label="Country Code"
              placeholder="Country Code"
            />
            <TextField
              as={TextField}
              name="telephone"
              fullWidth
              label="Telephone"
              placeholder="telephone"
              helperText={
                <ErrorMessage name="telephone">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              }
            />

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
            <FormHelperText>
              <ErrorMessage name="termsAndConditions">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </FormHelperText>
            <Button
              style={btnStyle}
              type="submit"
              variant="contained"
              color="primary"
            >
              Continue
            </Button>
          </Form>
        </Formik>
      </Paper>
    </Grid>
  );
}

export default CoursePaymentForm;
