
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../animation/data.json'
import LottieControlNotFound from './LottieControlNotFound'


export default class NotFound extends Component {
  render() {
    return (
      <div>
         <br></br>
         <br></br>
        <LottieControlNotFound animation={data} width={300} height={300}/>
        <Link to='/'>Go Home!</Link>
      </div>
    )
  }
}

