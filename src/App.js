import React, { Component } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';

export default class App extends Component {


  render() {
    return (

      <Router>
        <div>

          <Routes>

            <Route path='/' element={ <Home />} />



          </Routes>

        </div>
      </Router>

    )
  }
}
