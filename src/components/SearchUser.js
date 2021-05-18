import React, { Component } from 'react'

export default class SearchUser extends Component {

    render() {
        const {onSearchUser} = this.props
        return (
            <div>
                <input onChange={onSearchUser} type="text" placeholder="Course name search"></input>
            </div>
        )
    }
}