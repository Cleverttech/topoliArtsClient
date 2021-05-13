import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import RegisterForm from "./components/RegisterForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <RegisterForm /> */}
      </div>
    );
  }
}

export default App;
