import React, { Component } from "react";
import loader from "../animation/loader.json";
import LottieControlLoader from "./LottieControlNotFound";

export default class NotFound extends Component {
  render() {
    
    return (
      <div>
        <br></br>
        <br></br>
        <LottieControlLoader animation={loader} width={600} height={600} />
      </div>
    );
  }
}
