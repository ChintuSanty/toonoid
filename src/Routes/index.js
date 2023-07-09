import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} /> */}
    </Switch>
  </Router>
);

export default Routes;
