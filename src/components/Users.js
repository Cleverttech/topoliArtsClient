import React, { Component } from 'react'
import config from '../config'
import SearchUser from './SearchUser'
export default class Users extends Component {
       
    render() {
        const {onPatchRole , user, filteredUserList, onSearchUser} = this.props
        return (
            <div>
                <SearchUser onSearchUser={onSearchUser}/>
                {
                    filteredUserList.map((e)=>{
                        return <div key={e._id}>
                                <h3>{e.username}</h3>
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
                                    <button >Ok</button>
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
