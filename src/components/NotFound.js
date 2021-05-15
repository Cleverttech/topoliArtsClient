
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../animation/data.json'
import LottieControl from './LottieControl'


export default class NotFound extends Component {
  render() {
    return (
      <div>
         <br></br>
         <br></br>
        <LottieControl animation={data} width={600} height={400}/>
        <Link to='/'>Go Home!</Link>
      </div>
    )
  }
}

