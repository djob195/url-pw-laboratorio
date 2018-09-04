import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HDR_Navigation from './components/headers/Navigation/HDR_Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header><HDR_Navigation /></header>
      </div>
    );
  }
}

export default App;
