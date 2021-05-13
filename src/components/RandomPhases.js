import React, { Component } from 'react'
import {Grid, Paper} from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
  }));

export default function RandomPhases () {
    
        const classes = useStyles();
        return (
            <div>
                <div>
                    <h1>How does this work?</h1>
                        <div >
                            
                        </div>
                        <div className={classes.root}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={4} md={4}>
                                <Paper className={classes.paper}>
                                    <img style={{maxWidth:250}} src='https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg'/>
                                    <h5>You fill out the form and submit payment for the course.</h5>
                                </Paper>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                <Paper className={classes.paper}>
                                    <img style={{maxWidth:250}} src='https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg'/>
                                    <h5>Once a week you work with our lecturers via ZOOM. Lessons are 2 hours for adults and 1 hour for children.</h5>
                                </Paper>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                <Paper className={classes.paper}>
                                    <img style={{maxWidth:250}} src='https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg'/>
                                    <h5>In addition to the online painting lessons via ZOOM, you will receive a weekly link to one of our video courses. If you are a beginner, we have a video exercise tailored for you. For the advanced students we have more complicated online tasks.</h5>
                                </Paper>
                                </Grid>
                            </Grid>
                        </div>

                </div>
            </div>
        )
    }

