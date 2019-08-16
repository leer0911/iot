import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import ButtonBase from '../ButtonBase';
import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    boxSizing: 'border-box',
    minHeight: 36,
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border'],
      {
        duration: theme.transitions.duration.short,
      },
    ),
    borderRadius: '50%',
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    boxShadow: theme.shadows[6],
    '&:active': {
      boxShadow: theme.shadows[12],
    },
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
  },
  disabled: {
    color: theme.palette.action.disabled,
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.action.disabledBackground,
  },
  label: {
    width: '100%',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  primary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  extended: {
    borderRadius: 48 / 2,
    padding: '0 16px',
    width: 'auto',
    minHeight: 'auto',
    minWidth: 48,
    height: 48,
    '&$sizeSmall': {
      width: 'auto',
      padding: '0 8px',
      borderRadius: 34 / 2,
      minWidth: 34,
      height: 34,
    },
    '&$sizeMedium': {
      width: 'auto',
      padding: '0 16px',
      borderRadius: 40 / 2,
      minWidth: 40,
      height: 40,
    },
  },
  colorInherit: {
    color: 'inherit',
  },
  sizeSmall: {
    width: 40,
    height: 40,
  },
  sizeMedium: {
    width: 48,
    height: 48,
  },
});

const Fab = props => {
  const {
    children,
    color = 'default',
    size = 'large',
    variant = 'round',
    disabled = false,
    ...rest
  } = props;

  const classes = useClasses(styles);

  return (
    <ButtonBase
      className={cx(classes.root, {
        [classes.extended]: variant === 'extended',
        [classes.primary]: color === 'primary',
        [classes.secondary]: color === 'secondary',
        [classes[`size${capitalize(size)}`]]: size !== 'large',
        [classes.disabled]: disabled,
        [classes.colorInherit]: color === 'inherit',
      })}
      disabled={disabled}
      {...rest}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
};

Fab.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['round', 'extended']),
};

export default Fab;
