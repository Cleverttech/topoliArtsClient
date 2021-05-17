import axios from "axios";
import React, { Component } from "react";
import CoursesCreateForm from "./CoursesCreateForm";
import MyCoursesByMentor from "./MyCoursesByMentor";
import PortfolioForm from "./PortfolioForm";
import config from '../config'



class Profile extends Component {

  
  render () {
    const { onCreate, onCreatePortfolio, courses, user, onSubmitPic, error, onDeleteCourse} = this.props;
    
    
    if(!user) {
      return <p>Loading...</p>
    }else{

    
      return (

        <div>
          <h1>Profile page</h1>
          <img style={{width:'150px'}} src={user.image}alt="profpic"/>
          <form onSubmit={onSubmitPic}>
          <input name="img" type="file" placeholder="Select image"/>
          <button>Submit</button>
          </form>
          {/* <PortfolioForm onCreatePortfolio={onCreatePortfolio} /> <br></br>
          <CoursesCreateForm onCreate={onCreate} />
          <MyCoursesByMentor
            error={error}
            courses={courses}
            user={user}
            onDeleteCourse={onDeleteCourse}
          /> */}
        </div>
      );
    }
  }
}
export default Profile
