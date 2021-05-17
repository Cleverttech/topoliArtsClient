import { Button, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'


export default class Courses extends Component {



    render() {
        const {courses} = this.props
  
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <h1>Courses</h1>
                {
                    courses.map((e)=>{
                        return <div key={e._id}>
                                <div>
                                <br></br>
                                    <img style={{width: '40ch'}} src={e.image}/>
                                    <div>
                                        <h3>{e.name}</h3>
                                        <Button variant="contained" color="primary">Enroll</Button>
                                        
                                    </div>
                                    
                                </div>
                                </div>
                })
                }
                
            </div>
        )
    }
}
