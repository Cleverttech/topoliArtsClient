import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import Carousel from './Carousel'
import RandomPhrases from './RandomPhases'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Carousel />
                    <RandomPhrases/>
                </Grid>
            </div>
        )
    }
}
