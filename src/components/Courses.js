import React, { Component } from 'react'


export default class Courses extends Component {
   
    render() {
        const {courses} = this.props
  
        return (
            <div>
                <h1>Courses</h1>
                {
                    courses.map((e)=>{
                        console.log(e.mentor.username)
                        return <div key={e._id}>
                                    {e.mentor._id}
                                </div>
                })
                }
                
            </div>
        )
    }
}
