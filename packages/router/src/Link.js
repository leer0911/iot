import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import RouterContext from './RouterContext';
import { normalizeToLocation, resolveToLocation } from './utils';

const LinkAnchor = ({ navigate, onClick, ...rest }) => {
  const { target } = rest;

  const handleClick = useCallback(
    event => {
      try {
        if (onClick) onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (
        !event.defaultPrevented &&
        event.button === 0 &&
        (!target || target === '_self')
      ) {
        event.preventDefault();
        navigate();
      }
    },
    [navigate, onClick, target],
  );

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a onClick={handleClick} {...rest} />;
};

const Link = ({ component = LinkAnchor, replace, to, ...rest }) => {
  const context = useContext(RouterContext);
  const { history } = context;
  const location = normalizeToLocation(
    resolveToLocation(to, context.location),
    context.location,
  );

  const href = location ? history.createHref(location) : '';
  const props = {
    ...rest,
    href,
    navigate() {
      const location = resolveToLocation(to, context.location);
      const method = replace ? history.replace : history.push;
      method(location);
    },
  };

  return React.createElement(component, props);
};

Link.propTypes = {
  onClick: PropTypes.func,
  target: PropTypes.string,
  replace: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
};

export default Link;
