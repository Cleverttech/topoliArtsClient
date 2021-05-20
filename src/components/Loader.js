import React, { Component } from "react";
import loader from "../animation/loader.json";
import LottieControlLoader from "./LottieControlNotFound";

export default class NotFound extends Component {
  render() {
    
    return (
      <div style={{display: 'flex', justifyContent:'center'}}>
        <LottieControlLoader animation={loader} width={400} height={400} />
      </div>
    );
  }
}
