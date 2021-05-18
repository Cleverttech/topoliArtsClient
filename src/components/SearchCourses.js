import React, { Component } from 'react'

export default class SearchUser extends Component {

    render() {
        const {onSearchCourse} = this.props
        return (
            <div>
                <input onChange={onSearchCourse} type="text" placeholder="Username search"></input>
            </div>
        )
    }
}