import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { News } from '../container';

const NewsRoute = ({ match }) => {
  const { url } = match;
  return (
    <Switch>
      <Route path={`${url}`} component={News} exact />
    </Switch>
  );
};

export default NewsRoute;
