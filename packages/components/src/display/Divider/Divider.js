import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import { fade } from '../../theme/colorManipulator';

export const styles = theme => ({
  root: {
    height: 1,
    margin: 0,
    border: 'none',
    flexShrink: 0,
    backgroundColor: theme.palette.divider,
  },
  absolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  inset: {
    marginLeft: 72,
  },
  light: {
    backgroundColor: fade(theme.palette.divider, 0.08),
  },
  middle: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  vertical: {
    height: '100%',
    width: 1,
  },
});

const Divider = props => {
  const {
    absolute = false,
    className,
    component: Component = 'hr',
    light = false,
    variant = 'fullWidth',
    orientation = 'horizontal',
    ...other
  } = props;

  const classes = useClasses(styles);

  return (
    <Component
      className={cx(
        classes.root,
        {
          [classes.inset]: variant === 'inset',
          [classes.middle]: variant === 'middle',
          [classes.absolute]: absolute,
          [classes.light]: light,
          [classes.vertical]: orientation === 'vertical',
        },
        className,
      )}
      {...other}
    />
  );
};

Divider.propTypes = {
  absolute: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.elementType,
  light: PropTypes.bool,
  role: PropTypes.string,
  variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default Divider;
