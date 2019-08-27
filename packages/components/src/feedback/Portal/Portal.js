import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return ReactDOM.findDOMNode(container);
}

const Portal = props => {
  const { children, container, disablePortal = false, onRendered } = props;
  const [mountNode, setMountNode] = React.useState(null);

  useLayoutEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);

  useLayoutEffect(() => {
    if (onRendered && mountNode) {
      onRendered();
    }
  }, [mountNode, onRendered]);

  if (disablePortal) {
    React.Children.only(children);
    return React.cloneElement(children);
  }

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  disablePortal: PropTypes.bool,
  onRendered: PropTypes.func,
};

export default Portal;
