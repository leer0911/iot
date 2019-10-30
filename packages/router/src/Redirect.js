import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createLocation, locationsAreEqual } from './LocationUtils';

import Lifecycle from './Lifecycle';
import RouterContext from './RouterContext';

const Redirect = ({ to, push = false }) => {
  const context = useContext(RouterContext);
  const { history } = context;

  const method = push ? history.push : history.replace;
  const location = createLocation(to);

  return (
    <Lifecycle
      onMount={() => {
        method(location);
      }}
      onUpdate={(self, prevProps) => {
        const prevLocation = createLocation(prevProps.to);
        if (
          !locationsAreEqual(prevLocation, {
            ...location,
            key: prevLocation.key,
          })
        ) {
          method(location);
        }
      }}
      to={to}
    />
  );
};

Redirect.propTypes = {
  push: PropTypes.bool,
  from: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Redirect;
