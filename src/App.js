import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Root from './components/Root';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <Router>
          <Root>
             <Route path="/home" component={Home} />
          </Root>
      </Router>
    );
  }
}

export default App;
