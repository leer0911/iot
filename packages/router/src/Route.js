import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { isValidElementType } from 'react-is';

import RouterContext from './RouterContext';
import matchPath from './matchPath';

const Route = props => {
  const context = useContext(RouterContext);
  const location = props.location || context.location;
  const { children, component, render } = props;

  const { pathname } = location;
  const match = props.path ? matchPath(pathname, props) : context.match;

  const value = { ...context, location, match };

  let renderChildren = () => {
    if (!props.match) {
      return null;
    }

    // 注意：children | component | render 不能同时使用
    if (children) {
      return typeof children === 'function' ? children(props) : children;
    }

    if (component) {
      return React.createElement(component, props);
    }

    if (render) {
      render(props);
    }

    return null;
  };

  return (
    <RouterContext.Provider value={value}>
      {renderChildren()}
    </RouterContext.Provider>
  );
};

Route.propTypes = {
  exact: PropTypes.bool,
  location: PropTypes.object,
  render: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  component: (props, propName) => {
    if (props[propName] && !isValidElementType(props[propName])) {
      return new Error(
        `Invalid prop 'component' supplied to 'Route': the prop is not a valid React component`,
      );
    }
  },
};

export default Route;
