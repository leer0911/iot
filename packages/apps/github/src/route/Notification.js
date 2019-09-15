import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Notification } from '../container';

const NotificationRoute = ({ match }) => {
  const { url } = match;
  return (
    <Switch>
      <Route path={`${url}`} component={Notification} exact />
    </Switch>
  );
};

export default NotificationRoute;
