import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

export const styles = theme => ({
  root: {
    display: 'inline-flex',
    borderRadius: theme.shape.borderRadius,
  },
  contained: {
    boxShadow: theme.shadows[2],
  },
  fullWidth: {
    width: '100%',
  },
  grouped: {
    minWidth: 40,
    '&:not(:first-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    '&:not(:last-child)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  groupedOutlined: {
    '&:not(:first-child)': {
      borderLeftColor: 'transparent',
      marginLeft: -1,
    },
  },
  groupedContained: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.grey[400]}`,
    },
  },
  groupedContainedPrimary: {
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.primary.dark}`,
    },
  },
  groupedContainedSecondary: {
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.secondary.dark}`,
    },
  },
  groupedContainedDisabled: {
    '&:not(:last-child)': {
      borderRight: `1px solid ${theme.palette.action.disabled}`,
    },
  },
});

const ButtonGroup = props => {
  const {
    children,
    className: classNameProp,
    component: Component = 'div',
    variant = 'outlined',
    color = 'default',
    size = 'medium',
    disabled = false,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth = false,
    ...other
  } = props;

  const classes = useClasses(styles);

  const outlined = variant === 'outlined';
  const contained = variant === 'contained';
  const primary = color === 'primary';
  const secondary = color === 'secondary';

  const buttonClassName = cx(classes.grouped, {
    [classes.groupedOutlined]: outlined,

    [classes.groupedContained]: contained,
    [classes.groupedContainedPrimary]: contained && primary,
    [classes.groupedContainedSecondary]: contained && secondary,
    [classes.groupedContainedDisabled]: contained && disabled,
  });

  return (
    <Component
      className={cx(
        classes.root,
        {
          [classes.contained]: contained,
          [classes.fullWidth]: fullWidth,
        },
        classNameProp,
      )}
      {...other}
    >
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return React.cloneElement(child, {
          className: cx(buttonClassName, child.props.className),
          variant: child.props.variant || variant,
          color: child.props.color || color,
          size: child.props.size || size,
          disabled: child.props.disabled || disabled,
          disableFocusRipple,
          disableRipple,
          fullWidth,
        });
      })}
    </Component>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'contained']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default ButtonGroup;
