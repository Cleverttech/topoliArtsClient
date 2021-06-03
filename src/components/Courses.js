import React , {useState, useEffect} from "react";

import { Button, Grid, Typography , Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from "react-router-dom";
import SearchCourses from './SearchCourses'
import axios from 'axios';
import config from '../config';

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
    const [allCourses, updateCourses] = useState(courses);

    useEffect(() => {
      axios.get(`${config.API_URL}/api/courses`, { withCredentials: true })
      .then((response) => {
        updateCourses(response.data)
      })
    }, [])

    const arrangeCards =(card, index)=>{
      return (  

        <div style={boxStyle}>
      <Card style={{width:"20rem"}} key={index}>
        
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
            !allCourses.length ?
            <h3>No courses found.</h3>
            : true
          }
          <Typography style={friedaIntText} variant="h3">Courses Available</Typography>
          {
              <Grid style={gridStyle}>

                 {
                  allCourses.map(arrangeCards)
                 }               
            </Grid>

          }
        </div>
      );
    }
  }

export default Courses
