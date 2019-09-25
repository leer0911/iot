import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import ButtonBase from '../ButtonBase';
import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    ...theme.typography.button,
    width: 56,
    height: 56,
    minHeight: 36,
    padding: 0,
    minWidth: 0,
    borderRadius: '50%',
    boxSizing: 'border-box',
    boxShadow: theme.shadows[6],
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    '&:active': {
      boxShadow: theme.shadows[12],
    },
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border'],
      {
        duration: theme.transitions.duration.short,
      },
    ),
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
  },
  extendedSmall: {
    width: 'auto',
    padding: '0 8px',
    borderRadius: 34 / 2,
    minWidth: 34,
    height: 34,
  },
  extendedMedium: {
    width: 'auto',
    padding: '0 16px',
    borderRadius: 40 / 2,
    minWidth: 40,
    height: 40,
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
  disabled: {
    color: theme.palette.action.disabled,
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.action.disabledBackground,
  },
});

const Fab = props => {
  const {
    children,
    className: classNameProp,
    variant = 'round',
    color = 'default',
    size = 'large',
    disabled = false,
    ...rest
  } = props;

  const classes = useClasses(styles);

  const extended = variant === 'extended';
  const primary = color === 'primary';
  const secondary = color === 'secondary';
  const small = size === 'small';
  const medium = size === 'medium';

  return (
    <ButtonBase
      className={cx(
        classes.root,
        {
          [classes[`size${capitalize(size)}`]]: size !== 'large',

          [classes.extended]: extended,
          [classes.extendedSmall]: extended && small,
          [classes.extendedMedium]: extended && medium,

          [classes.primary]: primary,
          [classes.secondary]: secondary,
          [classes.colorInherit]: color === 'inherit',

          [classes.disabled]: disabled,
        },
        classNameProp,
      )}
      disabled={disabled}
      {...rest}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
};

Fab.propTypes = {
  component: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['round', 'extended']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
};

export default Fab;
