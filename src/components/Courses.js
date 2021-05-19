
import { Button,Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SearchCourses from './SearchCourses'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
function Courses(props){
  const classes = useStyles();

    const { courses, userList, onSearchCourse  } = props;
    const linkStyle = {
      color: "white",
      textDecoration:"none"
    };
    
    if (!userList) {
      return <p>Loading...</p>;
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SearchCourses  onSearchCourse={onSearchCourse} />
          {
            !courses.length ?
            <h3 style={{color: 'red'}}>No courses found?...Did you paste Manish's code?</h3>
            : true
          }
          <Typography variant="h2">Courses Available</Typography>
          {
              <Grid container spacing={3}  s>
              <Grid item xs={12} sm={6} lg={4}>
                  { courses.map((e) => {
                      return (
                        
                        <Card className={classes.root}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image={e.image}
                              title={e.name}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                {e.name}
                              </Typography>
                              <Typography gutterBottom variant="caption" component="h2">
                                Created by : {e.mentor.username}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                              {e.description}
                               
                              </Typography>
                        
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button fullWidth variant="contained" color="secondary">
                              <Link to={`/courses/${e._id}`} style={linkStyle}>
                                Enroll
                              </Link>
                          </Button>
                          </CardActions>
                        </Card> 
                      )
                    })
                    }
                </Grid>
            </Grid> 
          }
        </div>
      );
    }
  }

export default Courses
