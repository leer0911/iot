import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import ButtonBase from '../ButtonBase';
import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    padding: 12,
    borderRadius: '50%',
    overflow: 'visible',
    color: theme.palette.action.active,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  disabled: {
    backgroundColor: 'transparent',
    color: theme.palette.action.disabled,
  },
  edgeStart: {
    marginLeft: -12,
  },
  edgeEnd: {
    marginRight: -12,
  },
  edgeSmall: {
    marginLeft: -3,
  },
  colorInherit: {
    color: 'inherit',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  sizeSmall: {
    padding: 3,
    fontSize: theme.typography.pxToRem(18),
  },
  label: {
    width: '100%',
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
});

const IconButton = props => {
  const {
    className,
    children,
    color = 'default',
    size = 'medium',
    disabled = false,
    edge = false,
    ...rest
  } = props;

  const classes = useClasses(styles);

  return (
    <ButtonBase
      className={cx(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'default',
          [classes[`size${capitalize(size)}`]]: size !== 'medium',
          [classes.edgeStart]: edge === 'start',
          [classes.edgeEnd]: edge === 'end',
          [classes.edgeSmall]: edge && size === 'small',
          [classes.disabled]: disabled,
        },
        className,
      )}
      centerRipple
      disabled={disabled}
      {...rest}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
};

IconButton.propTypes = {
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  edge: PropTypes.oneOf(['start', 'end', false]),
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
};

export default IconButton;
