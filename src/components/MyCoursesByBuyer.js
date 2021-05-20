import React from "react";
import { Typography , Card, CardActionArea, CardContent, CardMedia, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Loader from './Loader'


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
function MyCoursesByBuyer(props) {
  const classes = useStyles();
  const { courses, user, userList  } = props;

  const boxStyle = {height : "auto",display: "flex", margin: "25px auto"}
  const gridStyle = { margin: "40px 0px", display: "flex", flexWrap : "wrap", flexDirection : "row" }
  const arrangeCards = (card, index) => {
    return (  
      <div style={boxStyle}>
      <Card style={{width:"18rem"}} key={index}>
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

      </Card> 
      </div>
      )
  }
    if(!courses || !user){
      return <p>Loading ...</p>
    }else{
      let filteredCourses = courses.filter((course)=>{
        
        if(course.buyers.length > 0){
          
              course.buyers.filter((e)=>{
            // console.log(e)
            if(e.userId._id == user._id){
              return e
            }
          })
          return course
        }  
      })
        return ( 
            <Grid style={gridStyle}>
              { filteredCourses.map(arrangeCards) }
            </Grid>
            )
    }
}

export default MyCoursesByBuyer;
