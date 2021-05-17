import React, { Component } from 'react'

export default class Users extends Component {
    render() {
        const { userList } = this.props
        return (
            <div>
                {
                    userList.map((e)=>{
                        return <div key={e._id}>
                                {e._id}
                            </div>
                    })
                }
            </div>
        )
    }
}
