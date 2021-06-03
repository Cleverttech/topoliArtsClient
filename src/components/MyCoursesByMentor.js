import React , {useState, useEffect} from "react";
import { Typography , Card, CardActionArea, CardContent, CardMedia, Grid, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
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
function MyCoursesByMentor(props){
  const {user, courses } = props;
  const classes = useStyles();
  const [allCourses, updateCourses] = useState()
  
  useEffect(() => {
    axios.get(`${config.API_URL}/api/courses`, { withCredentials: true })
    .then((response) => {
      updateCourses(response.data)
    })
  },[])

  const boxStyle = {
    height : "auto",
    display: "flex",
    margin: "25px auto"
 }
  const gridStyle = {
    margin: "40px 0px",
    display: "flex",
    flexWrap : "wrap",
    flexDirection : "row"
  }
  
  const handleDeleteCourse = (courseId) => {
    //1. Make an API call to the server side Route to delete that specific course
    let filteredCourseid = courses.filter((course) => {
      return course._id === courseId;
    });
    if (filteredCourseid) {
      axios.delete(`${config.API_URL}/api/courses/${courseId}`, {withCredentials: true})
      .then(() => {
        let filteredCourses = courses.filter((course) => {
          return course._id !== courseId;
          });
          updateCourses(filteredCourses)
          props.history.push('/profile')
      })
      .catch((error) => {
          this.setState({
            error: error.data,
          });
        });
    }
  };
  
  const arrangeCards = (card, index) => {

    return (  
      <div style={boxStyle}>
      <Card style={{width:"18rem"}} key={index}>
        
          <CardMedia
            className={classes.media}
            image={card.image}
            title={card.name}
          />
          <CardContent>

            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
             
            </Typography>
          </CardContent>
          <Button onClick={() => { handleDeleteCourse(card._id)}} fullWidth variant="contained" color="secondary">
            Delete
          </Button>

      </Card> 
       </div>
      )
  }

    if(!allCourses || !user){
      return <p>Loading ...</p>
    }else{
      
        let filteredCoursesMentor = allCourses.filter((course) => {
          if (course.mentor._id === user._id) {
            return course;
          }
        });

            return ( 
              <Grid style={gridStyle}>
                { filteredCoursesMentor.map(arrangeCards) }
              </Grid>
              )
      }
  }


export default MyCoursesByMentor;
