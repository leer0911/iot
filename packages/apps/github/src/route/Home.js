import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../container/';

const HomeRoute = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default HomeRoute;
