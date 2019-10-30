import React from 'react';
import PropTypes from 'prop-types';
import Router from './Router';
import createHistory from './createHistory';

const BrowserRouter = props => {
  return <Router history={createHistory(props)}>{props.children}</Router>;
};

BrowserRouter.propTypes = {
  basename: PropTypes.string,
  children: PropTypes.node,
  forceRefresh: PropTypes.bool,
  getUserConfirmation: PropTypes.func,
  keyLength: PropTypes.number,
};

export default BrowserRouter;
