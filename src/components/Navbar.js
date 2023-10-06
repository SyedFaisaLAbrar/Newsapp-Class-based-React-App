// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">News Bits</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            </li>
              <Link className="nav-link" to="/">About Us</Link>
              <Link className="nav-link" to="/general">General</Link>
              <Link className="nav-link" to="/health">Health</Link>
              <Link className="nav-link" to="/sports">Sports</Link>
              <Link className="nav-link" to="/science">Science</Link>
              <Link className="nav-link" to="/business">Business</Link>
              <Link className="nav-link" to="/technology">Technology</Link>
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar