// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

let {a_key} = process.env.REACT_APP_NEWS_API;

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
        <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<NewsComp key='home' pageSize={6} country="us" category="general" />} />
          <Route exact path="/science"  element={<NewsComp apiKey= {a_key} key='science' pageSize={6} country="us" category="science" />} />
          <Route exact path="/sports"  element={<NewsComp apiKey= {a_key} key='sports' pageSize={6} country="us" category="sports" />} />
          <Route exact path="/general"  element={<NewsComp apiKey= {a_key} key='general' pageSize={6} country="us" category="general" />} />
          <Route exact path="/health"  element={<NewsComp apiKey= {a_key} key='health' pageSize={6} country="us" category="health" />} />
          <Route exact path="/business"  element={<NewsComp apiKey= {a_key} key='business' pageSize={6} country="us" category="business" />} />
          <Route exact path="/technology"  element={<NewsComp apiKey= {a_key} key='technology' pageSize={6} country="us" category="technology" />} />
          <Route exact path="/entertainment"  element={<NewsComp apiKey= {a_key} key='entertainment' pageSize={6} country="us" category="entertainment" />} />
        </Routes>
      </div>
    </Router>
      </>
    )
  }
}