import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.indianexpress.com/2022/09/NASA-Artemis-III-spacesuit-20220908.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"85%",zIndex:"1"}}>
                {source?source:"Haranj"}
              </span>
              <span className="badge bg-success mx-3">New</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By <strong>{author ? author : "Unknown"}</strong> updated on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target={"_blank"}
              rel={"noreferrer"}
              className="btn btn-sm btn-info"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
