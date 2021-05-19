import React, { Component } from 'react'
import config from '../config'
import SearchUser from './SearchUser'
import axios from 'axios'
import Loader from './Loader'
import {Redirect} from 'react-router-dom'
export default class Users extends Component {

    handleChatClick=(chatUserId)=>{
        const { user } = this.props
        if(!user){
            this.props.history.push('/signin')
        }
        else {
           let data = {
               participants: [chatUserId, user._id]
           }
           axios.post(`${config.API_URL}/api/conversation`, data, {withCredentials: true})
                .then((response) => {
                    this.props.history.push(`/chat/${response.data._id}`)
                })
            
        }
    }
    handleGralChatClick=()=>{
        const { user } = this.props
        if(!user){
            this.props.history.push('/signin')
        }
        else {
           let data = {
               generalChat: true
           }
           axios.post(`${config.API_URL}/api/conversation`, data, {withCredentials: true})
                .then((response) => {
                    this.props.history.push(`/chat/${response.data._id}`)
                })
            
        }
    }
       
    render() {
        const {onPatchRole , user, userList, onSearchUser} = this.props
        if(!user){
            return <Redirect to="/login" />
        }else if(!userList){
            return (<Loader style={{width:"200px"}}/>)
        }else{

            return (
            <div>
                <SearchUser onSearchUser={onSearchUser}/>
                <h3 onClick={()=>{this.handleGralChatClick()}}>Global Chat</h3>
                {
                    !userList.length ?
                    <h3 style={{color: 'red'}}>No user found?...Did you paste Manish's code?</h3>
                    : true
                }
                {
                    userList.map((e)=>{
                        return <div key={e._id}>
                                <h3 onClick={()=>{this.handleChatClick(e._id)}}>{e.username}</h3>
                                <h4>{e.role}</h4>

                    {
                        user.role === 'owner' ?


                                <form onSubmit={(event)=>{onPatchRole(e._id, event)}} >
                                {
                                    e.role === 'student'
                                    ?
                                    <>
                                    <label for='student'>Student</label>
                                    <input type='checkbox' id='student' name='student' value='student'/>
                                    <button>Ok</button>
                                    </>
                                    :
                                    <input type='checkbox' name='admin' checked/>
                                    
                                    
                                }
                                
                                
                                </form>
                    : null           
                    }
                                {/* <button onClick={this.handleDeteleUser}>Delete</button> */}
                                

                            </div>
                    })
                }
            </div>
            )
        }
    }
}
