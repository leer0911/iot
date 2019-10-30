import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RouterContext from './RouterContext';
import matchPath from './matchPath';

const Switch = props => {
  const context = useContext(RouterContext);
  const location = props.location || context.location;
  let element, match;

  React.Children.forEach(props.children, child => {
    if (match == null && React.isValidElement(child)) {
      element = child;

      const path = child.props.path || child.props.from;

      match = path
        ? matchPath(location.pathname, { ...child.props, path })
        : context.match;
    }
  });

  return match
    ? React.cloneElement(element, { location, computedMatch: match })
    : null;
};

Switch.propTypes = { children: PropTypes.node, location: PropTypes.object };

export default Switch;
