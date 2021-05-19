import React, { Component } from "react";

import { Avatar, Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FormControlLabel, Checkbox, FormHelperText } from "@material-ui/core";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	formControl: {
		margin: theme.spacing(3),
	}
}));

function CoursePaymentForm(props){

	const theme = useTheme()
	const avatarStyle = {
	  backgroundColor:theme.palette.primary.main,
	};
  
		const paperStyle = {
			padding: "30px 20px",
			width: 375,
			margin: "30px auto",
		};

		const btnStyle = {
			marginTop: "20px",
		};

		//Validation starts here
		const initialValues = {
			fullname: "asdasd",
			email: "asda@gmailc,om",
			telephone: "234234234",
			termsAndConditions: false,
		};
		const validationSchema = Yup.object().shape({
			fullname: Yup.string().required("Full name is required!"),
			telephone: Yup.number().typeError("That doesn't look like a phone number").required("Telephone number is required!").positive().min(7),
			termsAndConditions: Yup.string().oneOf(["true"], "Please accept terms & conditions!"),
		});

		const { courses } = props

        const {courseId} = props.match.params
		console.log(validationSchema)
		const handleOnSubmit =(e)=> {
	
			const {courseId} = props.match.params
			// const { fullname, email,telephone , message} = values;
			// console.log(values)
            // console.log(fullname, email,telephone , message)
		   props.history.push(`/courses/${courseId}/payment`)
		 }
          console.log(initialValues )
		return (
			     <Grid>
				<Paper elevation={20} style={paperStyle}>
					<Grid align="center">
						<Avatar style={avatarStyle}>
							<CreditCardIcon />
						</Avatar>
                      
                      {
                        courses.map((el) => {
                         if( el._id === courseId ){
                          return ( <div>
						    <Typography variant="h6" gutterBottom>
							{el.name}
                             </Typography>
                                   <p>Offered by {el.mentor.username}</p>
                                 <Typography variant="subTitle" gutterBottom>
                                Price : €  {el.price}
                                 </Typography>
                               </div>
                              )
                          } 
                         })
                
                      }
                  
     	
					</Grid>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						//add onclick event
						onSubmit={handleOnSubmit}
					>
					  {(props) => (
						<Form  >
							<TextField
								as={TextField}
								name="fullname"
								fullWidth
								label="Fullname"
								placeholder="Enter fullname"
								helperText={<ErrorMessage name="fullname">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>}
							/>
							<TextFieldnpm start
								as={TextField}
								name="email"
								fullWidth
								label="Email"
								placeholder="Enter Email"
								helperText={<ErrorMessage name="email">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>}
							/>
							
							<TextField
								as={TextField}
								name="telephone"
								fullWidth
								label="Telephone"
								placeholder="telephone"
								helperText={<ErrorMessage name="telephone">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>}
							/>

							<TextField as={TextField} name="message" fullWidth label="Message" type="text" />
							<FormControlLabel control={<Field as={Checkbox} name="termsAndConditions" />} label="I accept the terms and conditions" />
							<FormHelperText>
								<ErrorMessage name="termsAndConditions">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
							</FormHelperText>
							<Button style={btnStyle} type="submit" variant="contained" color="secondary">
                               continue	
							</Button>
						</Form>
						)}
					</Formik>
				</Paper>
			</Grid>
        )

	}


export default CoursePaymentForm;
