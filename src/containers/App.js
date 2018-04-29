import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Routes
import HomePage from './HomePage';
import OrdersPage from './OrdersPage';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/rendeles" component={OrdersPage} />
    </div>
  </Router>
);

export default hot(module)(App);
