import React from "react";
import { Typography , Card, CardActionArea, CardContent, CardMedia, Grid, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root:{
   margin: "0px 70px",
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
  const classes = useStyles();

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
  const { courses, user, onDeleteCourse } = props;
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

            <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
             
            </Typography>
          </CardContent>
          <Button onClick={() => { onDeleteCourse(card._id)}} fullWidth variant="contained" color="secondary">
            Delete
          </Button>

        </CardActionArea>

      </Card> 
       </div>
      )
  }

    if(!courses || !user){
      return <p>Loading ...</p>
    }else{
      
        let filteredCoursesMentor = courses.filter((course) => {
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
