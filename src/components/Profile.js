import React, { Component } from "react";
import CoursesCreateForm from "./CoursesCreateForm";
import PortfolioForm from "./PortfolioForm";
import MyCoursesByMentor from "./MyCoursesByMentor";
import { Route } from "react-router";
import { Link } from "react-router-dom";

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
      </div>
    );
  }
}
export default Profile;
