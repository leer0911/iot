import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import Typography from '../Typography';
import StepIcon from '../StepIcon';

export const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '&$alternativeLabel': {
      flexDirection: 'column',
    },
    '&$disabled': {
      cursor: 'default',
    },
  },
  horizontal: {},
  vertical: {},
  label: {
    color: theme.palette.text.secondary,
    '&$active': {
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
    '&$completed': {
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
    '&$alternativeLabel': {
      textAlign: 'center',
      marginTop: 16,
    },
    '&$error': {
      color: theme.palette.error.main,
    },
  },
  active: {},
  completed: {},
  error: {},
  disabled: {},
  iconContainer: {
    flexShrink: 0,
    display: 'flex',
    paddingRight: 8,
    '&$alternativeLabel': {
      paddingRight: 0,
    },
  },
  alternativeLabel: {},
  labelContainer: {
    width: '100%',
  },
});

const StepLabel = props => {
  const {
    children,
    className: classNameProp,
    active = false,
    alternativeLabel = false,
    completed = false,
    disabled = false,
    error = false,
    icon,
    last,
    optional,
    orientation = 'horizontal',
    StepIconProps,
    StepIconComponent: StepIconComponentProp,
    ...other
  } = props;

  const classes = useClasses(styles);

  let StepIconComponent = StepIconComponentProp;

  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon;
  }

  return (
    <span
      className={cx(
        classes.root,
        classes[orientation],
        {
          [classes.disabled]: disabled,
          [classes.alternativeLabel]: alternativeLabel,
          [classes.error]: error,
        },
        classNameProp,
      )}
      {...other}
    >
      {icon || StepIconComponent ? (
        <span
          className={cx(classes.iconContainer, {
            [classes.alternativeLabel]: alternativeLabel,
          })}
        >
          <StepIconComponent
            completed={completed}
            active={active}
            error={error}
            icon={icon}
            {...StepIconProps}
          />
        </span>
      ) : null}
      <span className={classes.labelContainer}>
        <Typography
          variant="body2"
          component="span"
          className={cx(classes.label, {
            [classes.alternativeLabel]: alternativeLabel,
            [classes.completed]: completed,
            [classes.active]: active,
            [classes.error]: error,
          })}
          display="block"
        >
          {children}
        </Typography>
        {optional}
      </span>
    </span>
  );
};

StepLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  alternativeLabel: PropTypes.bool,
  completed: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.node,
  last: PropTypes.bool,
  optional: PropTypes.node,
  StepIconProps: PropTypes.object,
  StepIconComponent: PropTypes.elementType,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default StepLabel;
