import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { cx } from 'emotion';
import RippleHub from './RippleHub';
import propTypes from './propTypes';
import { useClasses } from '../../styles';

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
    color: 'inherit'
  },
  disabled: {
    pointerEvents: 'none',
    cursor: 'default'
  }
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
    className: classNameProp,
    centerRipple = false,
    disableRipple = false,
    disableTouchRipple = false,
    tabIndex = 0,
    action,
    children,
    disabled,
    onClick,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    onDragLeave,
    TouchRippleProps,
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
    skipRippleAction = disableTouchRipple
  ) => {
    return useEventCallback(event => {
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
      [classes.focusVisible]: focusVisible
    },
    classNameProp
  );

  return (
    <button
      className={className}
      onClick={handleClick}
      onDragLeave={handleDragLeave}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      tabIndex={disabled ? -1 : tabIndex}
      {...rest}
    >
      {children}
      {!disableRipple && !disabled ? (
        <RippleHub
          center={centerRipple}
          children={add => (ref.current = add)}
        />
      ) : null}
    </button>
  );
};

ButtonBase.propTypes = propTypes;

export default ButtonBase;
