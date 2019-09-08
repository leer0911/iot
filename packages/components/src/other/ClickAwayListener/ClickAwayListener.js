import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useForkRef, useEventCallback } from '../../utils/';

function useMountedRef() {
  const mountedRef = React.useRef(false);
  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;
}

function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function ClickAwayListener(props) {
  const {
    children,
    mouseEvent = 'onClick',
    touchEvent = 'onTouchEnd',
    onClickAway,
  } = props;
  const mountedRef = useMountedRef();
  const movedRef = React.useRef(false);

  const nodeRef = React.useRef(null);
  const handleOwnRef = React.useCallback(instance => {
    nodeRef.current = ReactDOM.findDOMNode(instance);
  }, []);
  const handleRef = useForkRef(children.ref, handleOwnRef);

  const handleClickAway = useEventCallback(event => {
    if (event.defaultPrevented) {
      return;
    }

    if (!mountedRef.current) {
      return;
    }

    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    const { current: node } = nodeRef;
    if (!node) {
      return;
    }

    const doc = node || document;

    if (
      doc.documentElement &&
      doc.documentElement.contains(event.target) &&
      !node.contains(event.target)
    ) {
      onClickAway(event);
    }
  });

  const handleTouchMove = React.useCallback(() => {
    movedRef.current = true;
  }, []);

  React.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);

      document.addEventListener(mappedTouchEvent, handleClickAway);
      document.addEventListener('touchmove', handleTouchMove);

      return () => {
        document.removeEventListener(mappedTouchEvent, handleClickAway);
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, handleTouchMove, touchEvent]);

  React.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      document.addEventListener(mappedMouseEvent, handleClickAway);

      return () => {
        document.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);

  return (
    <React.Fragment>
      {React.cloneElement(children, { ref: handleRef })}
    </React.Fragment>
  );
}

ClickAwayListener.propTypes = {
  children: PropTypes.node.isRequired,
  onClickAway: PropTypes.func.isRequired,
  mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),
  touchEvent: PropTypes.oneOf(['onTouchStart', 'onTouchEnd', false]),
};

export default ClickAwayListener;
