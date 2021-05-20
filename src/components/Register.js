import React from "react";
import { Avatar, Grid, Paper, Typography, TextField, Button, FormControlLabel, Checkbox, FormHelperText } from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {  useTheme} from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import * as Yup from "yup";

function Register(props) {
  const paperStyle = {
    padding: "30px 20px",
    width: 375,
    margin: "30px auto",
  };

  
  const theme = useTheme()
  const avatarStyle = {
    backgroundColor:theme.palette.primary.main,
  };
  //Validation starts here
  const initialValues = {
    username: "",
    email: "",
    password: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, "username too short").required("Username is required!"),
    email: Yup.string().email("Enter valid email").required("Email is required!"),
    password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Must contain 8 characters, a number and an Uppercase")
      .required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Please confirm password!"),
    termsAndConditions: Yup.string().oneOf(["true"], "Please accept terms & conditions"),
  });

  //handle client side onsubmit
  const { onSubmit } = props;
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        {" "}
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddBoxIcon />
          </Avatar>
          <Typography variant="h6" gutterBottom>
          Please enter all fields to register
          </Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              <Field
                as={TextField}
                name="username"
                fullWidth
                label="Username"
                placeholder="Enter username"
                helperText={<ErrorMessage name="name">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>}
              />
              <Field
                as={TextField}
                name="email"
                fullWidth
                label="Email"
                placeholder="Enter email"
                helperText={<ErrorMessage name="email">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>}
              />
              <Field
                as={TextField}
                name="password"
                fullWidth
                label="Password"
                type="password"
                placeholder="Enter password"
                helperText={<ErrorMessage name="password">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>}
              />
              <Field
                as={TextField}
                name="confirmPassword"
                fullWidth
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                helperText={<ErrorMessage name="confirmPassword">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>}
              />
              <FormControlLabel control={<Field as={Checkbox} name="termsAndConditions" />} label="I accept the terms and conditions" />
              <FormHelperText>
                <ErrorMessage name="termsAndConditions">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
              </FormHelperText>
              <Button fullWidth type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Register;
