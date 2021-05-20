import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import CarouselPortfolio from './Carousel'
import RandomPhrases from './RandomPhases'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Grid container direction="column" justify="center" alignItems="center">        
                    <RandomPhrases/>
                </Grid>
            </div>
        )
    }
}
