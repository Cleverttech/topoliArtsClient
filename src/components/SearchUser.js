import React, { Component } from 'react'

export default class SearchUser extends Component {

    render() {
        const {onSearchUser} = this.props
        return (
            <div>
                <input onChange={onSearchUser} type="text" placeholder="Username search"></input>
            </div>
        )
    }
}