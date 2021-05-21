import React from "react";

import config from '../config'
import SearchUser from './SearchUser'
import axios from 'axios'
import Loader from './Loader'
import {Redirect} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import {Card, Button, Grid, CardHeader, CardMedia,Avatar} from '@material-ui/core';
import { CheckBox } from "@material-ui/icons";


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

  }));

function UsersBoxTest(props){

    const classes = useStyles();

      const boxStyle = {
        height : "auto",
        display: "flex",
        margin: "10px auto"
    }
      const gridStyle = {
        margin: "10px 0px",
        display: "flex",
        flexWrap : "wrap",
        flexDirection : "row"
      }
    

      
    const {onPatchRole , user, userList, onSearchUser} = props

    const handleChatClick=(chatUserId)=>{
        const { user } = props
        if(!user){
            props.history.push('/signin')
        }
        else {
           let data = {
               participants: [chatUserId, user._id]
           }
           axios.post(`${config.API_URL}/api/conversation`, data, {withCredentials: true})
                .then((response) => {
                    props.history.push(`/chat/${response.data._id}`)
                })
            
        }
    }
    const handleGralChatClick=()=>{
        const { user } = props
        if(!user){
            props.history.push('/signin')
        }
        else {
           let data = {
               generalChat: true
           }
           axios.post(`${config.API_URL}/api/conversation`, data, {withCredentials: true})
                .then((response) => {
                    props.history.push(`/chat/${response.data._id}`)
                })
            
        }
    }

    const arrangeCards = (card, index) => {
      
        return (  

          <div style={boxStyle}>
              <Card style={{width:"10rem"}} key={index} className={classes.root}>
                <CardHeader
                  avatar={<Avatar src={card.image} width= '1rem' aria-label="recipe"/>} 
                  title={card.username}
                />
                <CardMedia title={card.username}/>               
                  <Button fullWidth variant="contained" color="secondary" onClick={()=>{handleChatClick(card._id)}}>
                    Message
                  </Button>
              </Card>
               {
                user.role !== 'owner'
                                    ? null
                                    :[<form onSubmit={(event)=>{onPatchRole(card._id, event)}} >
                                    
                                    {
                                        card.role === 'student'
                                        ?
                                        <>
                                        <label for='student'/>
                                        <input  variant='contained' color='secondary'type='checkbox' id='student' name='student' value='student'/>
                                        <Button variant='contained' color='secondary'>Ok</Button>
                                        </>  
                                        :
                                        <input variant='contained' color='secondary' type='checkbox' name='admin' checked/>
                                    }</form>
                                     
                                    
                                    ]
                                    
                                }
          </div>
          )
      }

        if(!user){
            return <Redirect to="/login" />
        }else if(!userList){
            return (<Loader/>)
        }else{

            let allUsers = userList.filter(u => u._id !== user._id)
            return (
                    <div>
                        <SearchUser onSearchUser={onSearchUser}/>
                        <Button variant ='contained' color='secondary' onClick={()=>{handleGralChatClick()}}>Global Chat</Button>
                        {
                        !allUsers.length 
                            ? <h4 style={{color: 'red'}}>No user found?...Did you paste Manish's code?</h4>
                            : true
                        }
                        
                        <Grid style={gridStyle}>
                                {allUsers.map(arrangeCards)}     
                        </Grid>
                    </div>)
        }                        
}

export default UsersBoxTest;
