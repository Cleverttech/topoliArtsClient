import React from 'react'
import {Grid, Paper,CardActionArea , Card, CardActions,CardContent, Typography,CardMedia} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      maxWidth: '350px',
    },
    media: {
        height: 300,
      },
  }));

export default function RandomPhases () {
    
        const classes = useStyles();
        return (
            <div>
              <h1>How does this work?</h1>
                  <div className={classes.root}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                          <Card className={classes.root} elevation={0}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="../assets/KidsImages/Lea.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Step 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                You fill out the form and submit payment for the course
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                          </Card>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                          <Card className={classes.root} elevation={0}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="../assets/AllBooks/GoodNight-cologne/Heumarkt_Master.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Step 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Once a week you work with our artists via ZOOM. Lessons are 2 hours for adults and 1 hour for children.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                          </Card>
                         </Grid>
                          <Grid item xs={12} sm={6} md={4}>
                          <Card className={classes.root} elevation={0}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="../assets/AllBooks/Snorri1/DS_5_Snorri.jpg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Step 3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                In addition to the online painting lessons via ZOOM, you will receive a weekly link to one of our video courses. If you are a beginner, we have a video exercise tailored for you. For the advanced students we have more complicated online tasks.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                          </Card>
                         </Grid>
                      </Grid>
                </div>
            </div>
        )
    }

