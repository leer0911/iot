import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import Typography from '../../display/Typography';
import StepIcon from '../StepIcon';

export const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  alternativeLabel: {
    flexDirection: 'column',
  },
  label: {
    color: theme.palette.text.secondary,
  },
  labelActive: {
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  labelCompleted: {
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  labelAlternativeLabel: {
    textAlign: 'center',
    marginTop: 16,
  },
  labelError: {
    color: theme.palette.error.main,
  },
  iconContainer: {
    flexShrink: 0,
    display: 'flex',
    paddingRight: 8,
  },
  iconContainerAlternativeLabel: {
    paddingRight: 0,
  },
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
            [classes.iconContainerAlternativeLabel]: alternativeLabel,
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
            [classes.labelAlternativeLabel]: alternativeLabel,
            [classes.labelCompleted]: completed,
            [classes.labelActive]: active,
            [classes.labelError]: error,
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
