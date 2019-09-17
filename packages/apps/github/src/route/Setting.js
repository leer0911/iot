import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Setting } from '../container';

const SettingRoute = ({ match }) => {
  const { url } = match;
  return (
    <Switch>
      <Route path={`${url}`} component={Setting} exact />
    </Switch>
  );
};

export default SettingRoute;
