
import React from "react";

import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Fab,
  Avatar
} from "@material-ui/core";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, useTheme} from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },

}));


function CoursesCreateForm(props) {
  const classes = useStyles();
  const { onCreate } = props;
  const theme = useTheme()

  const paperStyle = {
    padding: "30px 20px",
    width: 375,
    margin: "30px auto",
  };

  const btnStyle = {
    marginTop: "20px",
  };
  const avatarStyle = {
    backgroundColor: theme.palette.primary.main
  }
 
  const uploadBtn = {height:"25px", fontSize:"11px", letterSpacing:"1px"}
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
        <Avatar style={avatarStyle}>
            <LibraryBooksIcon/>
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Create a new course here !
          </Typography>
        </Grid>
        <br/>
      <form onSubmit={onCreate}>
      <label htmlFor="courseImage">
           <input
          style={{display:"none"}}

          id="courseImage"
          label="Add carousel Images"
          name="courseImage" type="file" accept="image/png, image/jpeg"
  
          />
              <Fab
              style={uploadBtn}
          color="secondary"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
        >
          <AddIcon />Upload course cover
        </Fab>
      
        </label>
          <TextField
            as={TextField}
            name="name"
            fullWidth
            label="Course name"
            placeholder="Enter course name"
          />  

          <TextField
            multiline
            name="description"
            fullWidth
            id="outlined-multiline-static"
            placeholder="Enter course description"
            rows={4}
          />
           <TextField
          fullWidth
          label="Course Price"
          name="price" 
           type="number"
        />
       
    
          <Button
            fullWidth
            style={btnStyle}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Create
          </Button>
       </form>
      </Paper>
    </Grid>
  )
}

export default CoursesCreateForm;

