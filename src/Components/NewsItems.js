import React from "react";
//import PropTypes from 'prop-types'

const NewsItems =(props)=>  {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0' }}
          >
            <span className="badge rounded-pill bg-danger" 
              style={{left: '90%', zIndex: '1'}}> {source}
            </span>
            </div>
          <img
            src={
              !imageUrl
                ? "https://www.breezemasti.com/wp-content/uploads/Nithya-Menen-Actress-wiki-age-family-husband-movies.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
         
      </div>
    );
}

export default NewsItems;
