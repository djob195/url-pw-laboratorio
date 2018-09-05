import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/js/Home';
import Error from './components/js/Error';
import Header from './components/js/Header';
import Efecto from './components/js/Efecto';


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
