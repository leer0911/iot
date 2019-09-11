import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const NestRoute = () => {
  return (
    <Switch>
      <Route path="/" render={() => <Redirect to="/news" />} />
    </Switch>
  );
};

export default NestRoute;
