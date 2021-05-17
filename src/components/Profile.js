import axios from "axios";
import React, { Component } from "react";
import CoursesCreateForm from "./CoursesCreateForm";
import MyCoursesByMentor from "./MyCoursesByMentor";
import MyCoursesByStudent from "./MyCoursesByStudent";

class Profile extends Component {
  render() {
    const {
      onCreate,
      onDeleteCourse,
      onCreatePortfolio,
      user,
      error,
      courses,
    } = this.props;
    return (
      <div>
        <h1>Profile page</h1>
        <PortfolioForm onCreatePortfolio={onCreatePortfolio} /> <br></br>
        <CoursesCreateForm onCreate={onCreate} />
        <MyCoursesByMentor
          error={error}
          courses={courses}
          user={user}
          onDeleteCourse={onDeleteCourse}
        />
        <MyCoursesByStudent />
      </div>
    );
  }
}
export default Profile;
