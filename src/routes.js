import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Home from './components/Home/home'


export default class Routes extends Component {
  render() {
    return (

      <Switch>
          <Route path="/" exact component={Home} />
      </Switch>
    )
  }
}
