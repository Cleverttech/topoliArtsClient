import axios from "axios";
import React, { Component } from "react";
import CoursesCreateForm from "./CoursesCreateForm";
import PortfolioForm from "./PortfolioForm";
import config from '../config'



class Profile extends Component {
  
  render() {

    const { onCreate, onCreatePortfolio, user, courses, onSubmitPic} = this.props;

    return (
      <div>
        <h1>Profile page</h1>
        <img style={{width:'150px'}} src={user.image} alt="profpic"/>

        <form onSubmit={onSubmitPic}>
        <input name="img" type="file" placeholder="Select image"/>
        <button>Submit</button>
        </form>
        <PortfolioForm onCreatePortfolio={onCreatePortfolio} /> <br></br>
        <CoursesCreateForm onCreate={onCreate}/>
      </div>
    );
  }
}
export default Profile
