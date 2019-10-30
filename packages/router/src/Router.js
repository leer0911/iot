import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RouterContext from './RouterContext';

const computeRootMatch = pathname => {
  return { path: '/', url: '/', params: {}, isExact: pathname === '/' };
};

const Router = ({ children, history }) => {
  const [location, setLocation] = useState();

  const match = computeRootMatch(location.pathname);
  const value = { history, location, match };

  useEffect(() => {
    const unListen = history.listen(_location => {
      setLocation(_location);
    });
    return () => {
      unListen && unListen();
    };
  }, [history]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};

Router.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object.isRequired,
};

export default Router;
