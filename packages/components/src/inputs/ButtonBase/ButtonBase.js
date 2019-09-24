import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import { useEventCallback } from '../../utils';
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

const ButtonBase = props => {
  const {
    component: Component = 'button',
    className: classNameProp,
    children,
    centerRipple = false,
    disableRipple = false,
    disabled,
    onClick,
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
    <Component className={className} onClick={handleClick} {...rest}>
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

ButtonBase.propTypes = {
  component: PropTypes.elementType,
  centerRipple: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
};
export default ButtonBase;
