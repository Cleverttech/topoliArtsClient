import React, { Component } from "react";

class PortfolioForm extends Component {
  render() {
    const { onCreatePortfolio } = this.props;
    return (
      <div>
        <form onSubmit={onCreatePortfolio}>
          <input name="title" type="text" placeholder="title" />

          <input name="description" type="text" placeholder="description" />

          <input
            type="file"
            id="cover"
            name="cover"
            accept="image/png,image/jpeg"
            placeholder="Choose cover"
          />

          <input
            type="file"
            id="image1"
            name="image1"
            accept="image/png,image/jpeg"
          />
          <input
            type="file"
            id="image2"
            name="image2"
            accept="image/png,image/jpeg"
          />
          <input
            type="file"
            id="image3"
            name="image3"
            accept="image/png,image/jpeg"
          />
          <button type="submit">Create Portfolio</button>
        </form>
      </div>
    );
  }
}
export default PortfolioForm;
