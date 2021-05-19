import React from "react";
import { Avatar, Grid, Paper, Typography, TextField, Button, Link } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {  useTheme} from "@material-ui/core/styles";
import * as Yup from "yup";

function TestLogin(props) {
 const { error, onLogin } = props;
 const paperStyle = {
  padding: "30px 20px",
  width: 375,
  margin: "30px auto",
 };

 //Validation starts here
 const initialValues = {
  username: "",
  email: "",
 };

 const theme = useTheme()

 const avatarStyle = {
   backgroundColor:theme.palette.primary.main,
 };

 const validationSchema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required!"),
  password: Yup.string()
   .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Must contain 8 characters, a number and an Uppercase")
   .required("Password is required!"),
 });

 return (
  <Grid>
   <Paper elevation={20} style={paperStyle}>
    <Grid align="center">
     <Avatar style={avatarStyle}>
      <LockIcon />
     </Avatar>
     <Typography variant="h6" gutterBottom>
            Login
          </Typography>
    </Grid>

    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onLogin}>
     {(props) => (
      <Form>
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
       <Button fullWidth type="submit" variant="contained" color="secondary">
        Login
       </Button>
      </Form>
     )}
    </Formik>

    <Typography>
     You don't have an account yet ?<Link href="/register"> Register!</Link>
    </Typography>
    <span style={{ color: "red" }}>{error}</span>
   </Paper>
  </Grid>
 );
}

export default TestLogin;
