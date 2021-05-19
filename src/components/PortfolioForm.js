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
import AddIcon from "@material-ui/icons/Add";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function PortfolioForm(props) {
  const classes = useStyles();
  const { onCreatePortfolio } = props;

  const paperStyle = {
    padding: "30px 20px",
    width: 375,
    margin: "30px auto",
  };

  const btnStyle = {
    marginTop: "20px",
  };
const theme = useTheme()
  const avatarStyle = {
    backgroundColor: theme.palette.primary.main,
  };
  const uploadBtn = {height:"25px", fontSize:"11px", letterSpacing:"1px"}
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
        <Avatar style={avatarStyle}>
            <PhotoLibraryIcon/>
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Create a portfolio here !
          </Typography>
        </Grid>
        <br/>
      <form onSubmit={onCreatePortfolio}>
      <label htmlFor="cover">
           <input
          style={{display:"none"}}

          id="cover"
          label="Add carousel Images"
          name="cover" type="file" accept="image/png, image/jpeg"
  
          />
              <Fab
              style={uploadBtn}
          color="secondary"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
        >
          <AddIcon />Upload Portfolio cover
        </Fab>
        </label>
        <br/>
        <br/>
      <label htmlFor="images">
           <input
          style={{display:"none"}}
    
          id="images"
          label="Add carousel Images"
          name="images" type="file" accept="image/png, image/jpeg"
          multiple
          />
              <Fab
                style={uploadBtn}
          color="secondary"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
        >
          <AddIcon /> Upload more artwork
        </Fab>
        </label>
     
          <TextField
            as={TextField}
            name="title"
            fullWidth
            label="Portfolio title"
            placeholder="Enter a title"
          />  

          <TextField
            multiline
            name="description"
            fullWidth
            id="outlined-multiline-static"
            placeholder="Enter course description"
            rows={4}
          />

        

          <Button
            fullWidth
            style={btnStyle}
            type="submit"
            variant="contained"
            color="secondary"
          >
           Create Portfolio
          </Button>
       </form>
      </Paper>
    </Grid>
  )
}

export default PortfolioForm;

