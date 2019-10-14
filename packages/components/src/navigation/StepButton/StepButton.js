import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import ButtonBase from '../../inputs/ButtonBase';
import StepLabel from '../StepLabel';

export const styles = {
  root: {
    width: '100%',
    padding: '24px 16px',
    margin: '-24px -16px',
    boxSizing: 'content-box',
  },
  horizontal: {},
  vertical: {
    justifyContent: 'flex-start',
    padding: '8px',
    margin: '-8px',
  },
  touchRipple: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
};

const StepButton = props => {
  const {
    children,
    className: classNameProp,
    active,
    alternativeLabel,
    completed,
    disabled,
    icon,
    last,
    optional,
    orientation,
    ...other
  } = props;

  const classes = useClasses(styles);

  const childProps = {
    active,
    alternativeLabel,
    completed,
    disabled,
    icon,
    optional,
    orientation,
  };
  const child = <StepLabel {...childProps}>{children}</StepLabel>;

  return (
    <ButtonBase
      disabled={disabled}
      TouchRippleProps={{ className: classes.touchRipple }}
      className={cx(classes.root, classes[orientation], classNameProp)}
      {...other}
    >
      {child}
    </ButtonBase>
  );
};

StepButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  alternativeLabel: PropTypes.bool,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  last: PropTypes.bool,
  optional: PropTypes.node,
};

export default StepButton;
