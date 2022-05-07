import React, { Component } from 'react'
import './Newsitem.css';
export default class NewsItem extends Component {
  render() {
      let {title,description,image,newsurl} = this.props;
    return (
      <div>
        <div className="card my-3" style={{width: "25rem"}}>
        <img src={image} className="card-img-top newsitem" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} className="btn btn-success">Read More...</a>
        </div>
        </div>
      </div>
    )
  }
}
