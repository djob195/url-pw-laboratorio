import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Error from './components/Error';
import Header from './components/Header'
import Efecto from './components/Efecto'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/efecto" component={Efecto} />
            <Route  component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
