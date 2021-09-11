import React, { Component } from "react";
//import PropTypes from 'prop-types'

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newdDetail/" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
         
      </div>
    );
  }
}

export default NewsItems;
