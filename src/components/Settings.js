import React from "react";
import { Avatar, Grid, Paper, Typography, TextField, Button, FormControlLabel, Checkbox, FormHelperText } from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import SettingsIcon from '@material-ui/icons/Settings';
import * as Yup from "yup";

function Settings (props) {

  const { user, onSubmitSettings } = props;

  const paperStyle = {
    padding: "30px 20px",
    width: 375,
    margin: "30px auto",
  };
  const headerStyle = {
    margin: 0,
  };
  const avatarStyle = {
    backgroundColor: "#7f7f7f",
  };
  //Validation starts here
  const initialValues={
    username: '',
    email: '',
    password: '',
  }
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, "username too short"),
    email: Yup.string().email("Enter valid email"),
    password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Must contain 8 characters, a number and an Uppercase"),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match"),      
  });

  //handle client side onsubmi    
    return (
      <Grid>
      <Paper elevation={20} style={paperStyle}>
        {" "}
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <SettingsIcon />
          </Avatar>
          <h2 style={headerStyle}>Update User Settings</h2>
          <Typography variant="caption" gutterBottom>
            Only fill out fields you want to update
          </Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitSettings}>
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
              
              <br></br>
              <br></br>
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

export default Settings;
