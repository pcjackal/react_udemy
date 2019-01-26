import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';


export default class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    )
  }
}
