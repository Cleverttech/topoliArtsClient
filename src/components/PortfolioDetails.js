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
        <h1>Portfolio</h1>
        <img src={portfolio.cover} alt={portfolio.cover} width="200px" />
        <h3>Pictures for Carousel</h3>
        {portfolio.images.map((e, i) => {
          return (
            <div key={e[i]}>
              <p>{e}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
}