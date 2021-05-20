import { Grid} from '@material-ui/core'
import React from 'react'
import RandomPhrases from './RandomPhases'



function LandingPage(){
    
    let Image = './assets/AllBooks/Frieda/MDerenbach_Frieda_1.jpg'
    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: "center",
            height: '65vh',

        }
    };
    
        return (
            <div>
                <Grid md={12} style={styles.paperContainer}>
                    {/* <img style={{margin: '10px', objectFit: 'fill'}} src='./assets/AllBooks/Frieda/MDerenbach_Frieda_1.jpg'/> */}

                </Grid>
                <Grid container direction="column" justify="center" alignItems="center">        
                    <RandomPhrases/>
                </Grid>
            </div>
        )
    
}

export default LandingPage
