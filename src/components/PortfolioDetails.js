import { Button, Typography } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../config";
import Carousel from './Carousel'
import Image from 'material-ui-image'


const friedaIntText = {
  fontWeight: "bolder",
  marginTop: "100px",
  marginBottom: "50px"
};
export default class PortfolioDetails extends Component {
  state = {
    portfolio: null,
    extraImg: null,
  };
 
  componentDidMount() {
    const artistId = this.props.match.params.artistId;
    let vol1=[];
    axios
      .get(`${config.API_URL}/api/artists/${artistId}`)
      .then((result) => {
        result.data.portfolio.images.map((e, i) => {
          return vol1.push({imgPath: `${e}`})
        })
        this.setState({
          portfolio: result.data.portfolio,
          extraImg: vol1
        });
        
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    const {portfolio, extraImg} = this.state

    if (portfolio == null) {
      return (<div>
          <h1 alignText >No content yet, ask your mentor to post something here!</h1>
          <Button variant='contained' color='secondary' component={Link} to={'/artists'}>Back Home</Button>
        </div>)
    }else{  
    return (
      <div>
            <Typography variant="h3" color="primary" style={friedaIntText}>
                   My Portfolio
              </Typography>
              <img
                loading='lazy'
                src={portfolio.cover}
                alt={portfolio.cover}
                style={{maxWidth:'75vw', height:"auto"}}
              />

              <Typography variant="h3" color="primary" style={friedaIntText}>
              {portfolio.title}
              </Typography>
              <Typography variant="p" color="primary" >
              {portfolio.description}
              </Typography>
  
        <Carousel images={extraImg}/>
        <div style={{ margin: "auto" , display: 'flex', justifyContent: 'space-around'}}>
        <Button variant='contained' color='secondary' component={Link} to={'/artists'}> Go Back </Button>
        </div>
      </div>
    );
  }
}
}