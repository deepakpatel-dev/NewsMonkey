import React, { Component } from "react";
//import PropTypes from 'prop-types'

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl , newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://www.breezemasti.com/wp-content/uploads/Nithya-Menen-Actress-wiki-age-family-husband-movies.jpg": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target='blank' className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
         
      </div>
    );
  }
}

export default NewsItems;
