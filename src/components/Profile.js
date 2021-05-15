import React, { Component } from "react";
import CoursesCreateForm from "./CoursesCreateForm";
import PortfolioForm from "./PortfolioForm";
class Profile extends Component {
  render() {
    const { onCreate } = this.props;
    return (
      <div>
        <h1>Profile page</h1>
        <PortfolioForm /> <br></br>
        <CoursesCreateForm onCreate={onCreate} />
      </div>
    );
  }
}
export default Profile;
