import React from "react";
import { Button, Grid, Typography , Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from "react-router-dom";
import SearchCourses from './SearchCourses'

const useStyles = makeStyles((theme) => ({
 root:{
  margin: "0px",
 },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 200,
  },
}));
const sectionStyle = { width: "80%", margin: "20px auto" };
const friedaIntText = {

  fontWeight: "bolder",
};
function Courses(props){
   const classes = useStyles();

   const theme = useTheme()
    const { courses, userList, onSearchCourse  } = props;
    const linkStyle = {
      color: "white",
      textDecoration:"none"
    };
    const boxStyle = {
      height : "auto",
      display: "flex",
      margin: "100px auto",

   }
    const gridStyle = {
      margin: "0px",
      display: "flex",
      flexWrap : "wrap",
      flexDirection : "row"
    }
    const arrangeCards =(card, index)=>{
      return (  

        <div style={boxStyle}>
      <Card style={{width:"20rem"}} key={index}>
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
        <div className={classes.root} style={sectionStyle}>
           <SearchCourses  onSearchCourse={onSearchCourse} />
          {
            !courses.length ?
            <h3 style={{color: theme.palette.secondary.main}}>No courses found?...Did you paste Manish's code right?</h3>
            : true
          }
          <Typography style={friedaIntText} variant="h3">Courses Available</Typography>
          {
              <Grid style={gridStyle}>

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
