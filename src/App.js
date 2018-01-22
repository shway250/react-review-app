import React, { Component } from 'react';
import './App.css';

//importing react-router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//importing page components
import Home from './page_components/Home.js'
import Search from './page_components/Search.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="sidebar">
            <Link to="/">Go Home Richard!! </Link>
            <Link to="/search">Search For Gifs </Link>
          </div>
          <section className="App">
            <Route exact path="/" component={Home} />
            <Route  path="/search" component={Search} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;