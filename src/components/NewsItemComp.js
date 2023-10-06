import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class NewsItemComp extends Component {

    render() {
        let { title, description, urlToImage, url, author, date, source } = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={urlToImage} className="card-img-top" alt={urlToImage} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <span className="badge badge-pill badge-primary">{source}</span>
                        <p className="card-text">{description}&nbsp;</p>
                        <p className="card-text"><small class="text-muted">By {author ? author : 'Unkown'} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} className="btn btn-dark">Read Article</a>
                    </div>
                </div>
            </div>
        )
    }
}
