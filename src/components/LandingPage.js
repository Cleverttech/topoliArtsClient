import { Grid} from '@material-ui/core'
import React from 'react'
import RandomPhrases from './RandomPhases'
import Carousel from './Carousel'


function LandingPage(){
    const landingImages = [
        {
          imgPath: "../assets/Landingpage1.jpg",
        },
        {
          imgPath: "../assets/Landingpage2.jpg",
        },
        {
          imgPath: "../assets/Landingpage3.jpg",
        },
     
      ]
      const gridStyle = {
        marginTop: "-200px",
      }; 

        return (
            <div style={gridStyle}>
               <Carousel images={landingImages}/>
                <Grid container direction="column" justify="center" alignItems="center">        
                    <RandomPhrases/>
                </Grid>
            </div>
        )
    
}

export default LandingPage
