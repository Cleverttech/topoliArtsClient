import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
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

    if (portfolio == null) {
      return (<div>
          <h1>No content yet, ask your mentor to post something here!</h1>
          <Link to={'/'}>Back Home</Link>
        </div>)
    }else{
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
}