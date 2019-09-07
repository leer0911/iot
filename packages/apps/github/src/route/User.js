import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../container/';

const User = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default User;
