import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useGlobalStore } from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userState } = useGlobalStore();
  const { userId } = userState || {};
  return (
    <Route
      {...rest}
      render={props => {
        return userId ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
