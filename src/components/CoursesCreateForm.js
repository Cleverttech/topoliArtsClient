import React, { Component } from 'react'


export default class CoursesCreateForm extends Component {


    render() {
        const {onCreate} = this.props
        return (
          <form onSubmit={onCreate}>
            <input name="name" type="text" placeholder="Enter course name"/>
            <input name="description" type="text" placeholder="Enter description"/>
            <input name="price" type="number" placeholder="Enter price"/>
            <input name="courseImage" type="file" accept='image/png, image/jpeg'/>
            <button type="submit" >Create</button>
          </form>
        )
      }
    }