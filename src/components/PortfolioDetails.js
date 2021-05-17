import React, { Component } from "react";
import axios from "axios";
import config from "../config";

class PortfolioDetails extends Component {
  state = {
    portfolio: {},
  };
  componentDidMount = () => {
    const artistId = this.props.match.params.artistId;
    axios
      .get(`${config.API_URL}/api/artists/${artistId}`, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result.data);
        this.setState({
          portfolio: result.data.portfolio,
        });
      })
      .catch((err) => {
        console.log("failed miserably");
      });
  };
  render() {
    const { portfolio } = this.state;
    const { userList, user, routeProps } = this.props;
    console.log("Manually sent props", userList, user, routeProps);
    return (
      <div>
        <h2>This is the portfolio Details page</h2>
        <p>{portfolio.cover}</p>
        <p>{portfolio.description}</p>

        <p>{portfolio.description}</p>
        <p></p>
      </div>
    );
  }
}
export default PortfolioDetails;
