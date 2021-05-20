
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from "react";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SearchCourses from './SearchCourses'

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 200,
  },
}));
function Courses(props){
   const classes = useStyles();

    const { courses, userList, onSearchCourse  } = props;
    const linkStyle = {
      color: "white",
      textDecoration:"none"
    };
    const boxStyle = {
      height : "auto",
      display: "flex",
      margin: "25px auto "
   }
    const gridStyle = {
      display: "flex",
      flexWrap : "wrap",
      flexDirection : "row"
    }
    const arrangeCards =(card, index)=>{
      return (  
       <div style={boxStyle}>
          <Card style={{width:"18rem" }} key={index}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={card.image}
            title={card.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>
            <Typography gutterBottom variant="caption" component="h2">
              Created by : {card.mentor.username}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
             
            </Typography>
      
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button fullWidth variant="contained" color="secondary">
            <Link to={`/courses/${card._id}`} style={linkStyle}>
              Enroll
            </Link>
        </Button>
        </CardActions>
      </Card> 
       </div>
      
      )
    }
    if (!userList) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <SearchCourses  onSearchCourse={onSearchCourse} />
          {
            !courses.length ?
            <h3 style={{color: 'red'}}>No courses found?...Did you paste Manish's code?</h3>
            : true
          }
          <Typography variant="h3">Courses Available</Typography>
          {
              <Grid style={gridStyle} spacing={4}>

                 {
                  courses.map(arrangeCards)
                 }               
            </Grid>

          }
        </div>
      );
    }
  }

export default Courses
