import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import { capitalize } from '../../utils/helpers';

const RADIUS = 10;

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle',
  },
  badge: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    boxSizing: 'border-box',
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
    minWidth: RADIUS * 2,
    padding: '0 4px',
    height: RADIUS * 2,
    borderRadius: RADIUS,
    backgroundColor: theme.palette.color,
    color: theme.palette.textColor,
    zIndex: 1,
    transform: 'scale(1) translate(50%, -50%)',
    transformOrigin: '100% 0%',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  colorError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  invisible: {
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: 'scale(0) translate(50%, -50%)',
    transformOrigin: '100% 0%',
  },
  dot: {
    height: 6,
    minWidth: 6,
    padding: 0,
  },
});

const Badge = props => {
  const {
    badgeContent,
    children,
    className,
    color = 'default',
    component: ComponentProp = 'span',
    invisible: invisibleProp,
    max = 99,
    showZero = false,
    variant = 'standard',
    ...other
  } = props;

  const classes = useClasses(styles);

  let invisible = invisibleProp;

  if (
    invisibleProp == null &&
    ((badgeContent === 0 && !showZero) ||
      (badgeContent == null && variant !== 'dot'))
  ) {
    invisible = true;
  }

  let displayValue = '';

  if (variant !== 'dot') {
    displayValue = badgeContent > max ? `${max}+` : badgeContent;
  }

  return (
    <ComponentProp className={cx(classes.root, className)} {...other}>
      {children}
      <span
        className={cx(classes.badge, {
          [classes[`color${capitalize(color)}`]]: color !== 'default',
          [classes.invisible]: invisible,
          [classes.dot]: variant === 'dot',
        })}
      >
        {displayValue}
      </span>
    </ComponentProp>
  );
};

Badge.propTypes = {
  badgeContent: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error']),
  component: PropTypes.elementType,
  invisible: PropTypes.bool,
  max: PropTypes.number,
  showZero: PropTypes.bool,
  variant: PropTypes.oneOf(['standard', 'dot']),
};

export default Badge;
