import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route
}from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home}></Route>
          {/* exact 精确匹配 */}
          <Route path='/about' component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
