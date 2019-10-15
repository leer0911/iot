import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import CheckCircle from '../internal/svg-icons/CheckCircle';
import Warning from '../internal/svg-icons/Warning';
import SvgIcon from '../SvgIcon';

export const styles = theme => ({
  root: {
    display: 'block',
    color: theme.palette.text.disabled,
    '&$active': {
      color: theme.palette.primary.main,
    },
    '&$completed': {
      color: theme.palette.primary.main,
    },
    '&$error': {
      color: theme.palette.error.main,
    },
  },
  text: {
    fill: theme.palette.primary.contrastText,
    fontSize: theme.typography.caption.fontSize,
    fontFamily: theme.typography.fontFamily,
  },
  active: {},
  completed: {},
  error: {},
});

const StepIcon = props => {
  const { completed = false, icon, active = false, error = false } = props;

  const classes = useClasses(styles);

  if (typeof icon === 'number' || typeof icon === 'string') {
    if (error) {
      return <Warning className={cx(classes.root, classes.error)} />;
    }
    if (completed) {
      return <CheckCircle className={cx(classes.root, classes.completed)} />;
    }
    return (
      <SvgIcon
        className={cx(classes.root, {
          [classes.active]: active,
        })}
      >
        <circle cx="12" cy="12" r="12" />
        <text className={classes.text} x="12" y="16" textAnchor="middle">
          {icon}
        </text>
      </SvgIcon>
    );
  }

  return icon;
};

StepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.node.isRequired,
};

export default StepIcon;
