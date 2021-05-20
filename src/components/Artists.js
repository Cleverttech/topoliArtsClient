import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card, Button, Grid, CardHeader, CardMedia, CardContent,Avatar, Typography} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Loader from './Loader'




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '70.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
const sectionStyle = { width: "80%", margin: "100px auto" };
function Artists(props){

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
    const { userList } = props
      const arrangeCards = (card, index) => {

        return (  

          <div style={boxStyle}>
              <Card style={{width:"18rem"}} key={index} className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {card.username[0]}
                    </Avatar>
                  } 
                  title={card.username}
                />
                <CardMedia
                  className={classes.media}
                  image={card.image}
                  title={card.username}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                     Click on the portfolio link below to see more of this Mentor's work
                  </Typography>
                </CardContent>
               
                  <Button fullWidth variant="contained" color="secondary">
                    <Link style={{color:"white", textDecoration:"none"}} to={`/artists/${card._id}`}>Portfolio</Link>
                  </Button>

              </Card>
          </div>
          )
      }
      if (!userList) {
        return <Loader />;
      } else {
        let filteredUsers = userList.filter((singleUser) => {
    
          if (singleUser.role !== "student") {
            return singleUser 
          }
        })
        return (
          <div style={sectionStyle}>
          
             <Typography variant="h3" color="primary" style={{marginTop:"100px"}}>
                   Meet the Mentors
              </Typography>

             <Typography style={{textAlign:"center", margin:"40px"}} variant="p" color="primary" component="p" >
              Lorem ipsum stuff Lorem ipsum stuff Lorem ipsum stuff Lorem ipsum
              stuffLorem ipsum stuffLorem ipsum stuffLorem ipsum stuffLorem ipsum
              stuff
              Lorem ipsum stuff Lorem ipsum stuff Lorem ipsum stuff Lorem ipsum
              stuffLorem ipsum stuffLorem ipsum stuffLorem ipsum stuffLorem ipsum
              stuff
              Lorem ipsum stuff Lorem ipsum stuff Lorem ipsum stuff Lorem ipsum
              stuffLorem ipsum stuffLorem ipsum stuffLorem ipsum stuffLorem ipsum
              stuff
             </Typography>
    
              <Grid style={gridStyle}>
                { filteredUsers.map(arrangeCards) }
              </Grid>
          </div>
        )
     }
}

export default Artists
