import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Profile } from '../container';

const ProfileRoute = ({ match }) => {
  const { url } = match;
  return (
    <Switch>
      <Route path={`${url}`} component={Profile} exact />
    </Switch>
  );
};

export default ProfileRoute;
