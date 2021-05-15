import React, { Component } from "react";
import CoursesCreateForm from "./CoursesCreateForm";
import PortfolioForm from "./PortfolioForm";
class Profile extends Component {
  render() {
    const { onCreate, onCreatePortfolio } = this.props;
    return (
      <div>
        <h1>Profile page</h1>
        <PortfolioForm onCreatePortfolio={onCreatePortfolio} /> <br></br>
        <CoursesCreateForm onCreate={onCreate} />
      </div>
    );
  }
}
export default Profile;
