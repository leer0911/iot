import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import propTypes from './propTypes';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import RippleHub from './RippleHub';

export const styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 'none',
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
  },
  disabled: {
    pointerEvents: 'none',
    cursor: 'default',
  },
};

const useEventCallback = fn => {
  const ref = useRef(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  });
  return useCallback(event => (0, ref.current)(event), []);
};

const ButtonBase = props => {
  const {
    component: Component = 'button',
    className: classNameProp,
    children,
    centerRipple = false,
    disableRipple = false,
    disabled,
    onClick,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    onDragLeave,
    ...rest
  } = props;

  const classes = useClasses(styles);
  const ref = useRef(null);

  const [focusVisible, setFocusVisible] = useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  const useRippleHandler = (
    eventCallback,
    skipRippleAction = disableRipple,
  ) => {
    return useEventCallback(event => {
      event.stopPropagation();
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = event.defaultPrevented || skipRippleAction;
      if (!ignore) {
        event.persist();
        ref.current(event);
      }
      return true;
    });
  };

  const handleDragLeave = useRippleHandler(onDragLeave);
  const handleTouchStart = useRippleHandler(onTouchStart);
  const handleTouchEnd = useRippleHandler(onTouchEnd);
  const handleTouchMove = useRippleHandler(onTouchMove);
  const handleClick = useRippleHandler(onClick);

  const className = cx(
    classes.root,
    {
      [classes.disabled]: disabled,
      [classes.focusVisible]: focusVisible,
    },
    classNameProp,
  );

  return (
    <Component
      className={className}
      onClick={handleClick}
      onDragLeave={handleDragLeave}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      {...rest}
    >
      {children}
      {!disableRipple && !disabled ? (
        <RippleHub
          center={centerRipple}
          children={add => (ref.current = add)}
        />
      ) : null}
    </Component>
  );
};

ButtonBase.propTypes = propTypes;

export default ButtonBase;
