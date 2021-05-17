import axios from "axios";
import React, { Component } from "react";
import config from "../config";

export default class PortfolioDetails extends Component {
  state = {
    portfolio: null,
  };
  componentDidMount() {
    const artistId = this.props.match.params.artistId;
    axios
      .get(`${config.API_URL}/api/artists/${artistId}`)
      .then((result) => {
        this.setState({
          portfolio: result.data.portfolio,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const portfolio = this.state.portfolio;

    if (!portfolio) {
      return <p>Loading . . . </p>;
    }

    return (
      <div>
        <h1>This is the specific portfolio</h1>
        <img src={portfolio.cover} alt={portfolio.cover} />
        {portfolio.images.map((e, i) => {
          return (
            <div key={e[i]}>
              <img src={e} />
            </div>
          );
        })}
      </div>
    );
  }
}
