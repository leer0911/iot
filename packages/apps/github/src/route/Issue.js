import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Issue } from '../container';

const IssueRoute = ({ match }) => {
  const { url } = match;
  return (
    <Switch>
      <Route path={`${url}`} component={Issue} exact />
    </Switch>
  );
};

export default IssueRoute;
