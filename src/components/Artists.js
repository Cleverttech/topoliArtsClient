import React, { Component } from 'react'

export default class Artists extends Component {

    handlePortfolio=()=>{
        
    }

    render() {

        const {userList} = this.props
        
        if(!userList){
            return <p>Loading...</p>
        }else{

        
        return (
            <div>
                <h1>Artists Page</h1>
                <h2>Meet the mentors</h2> 
                <p> Lorem ipsum stuff Lorem ipsum stuff Lorem ipsum stuff Lorem ipsum stuffLorem ipsum stuffLorem ipsum stuffLorem ipsum stuffLorem ipsum stuff</p>
                {
                    userList.map((singleUser)=>{
                        if(singleUser.role != 'student'){
                        return (
                            <div key={singleUser._id}>
                                <h3>{singleUser.username}</h3>,
                                <img src={singleUser.image} alt={singleUser.image}/>,
                                <button onClick={this.handlePortfolio}>Portfolio</button>
                            </div>
                        )
                        }
                    })
                }
            </div>
            )
        }
    }
}
