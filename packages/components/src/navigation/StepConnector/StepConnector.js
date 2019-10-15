import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';

export const styles = theme => ({
  root: {
    flex: '1 1 auto',
  },
  horizontal: {},
  vertical: {
    marginLeft: 12, // half icon
    padding: '0 0 8px',
  },
  alternativeLabel: {
    position: 'absolute',
    top: 8 + 4,
    left: 'calc(-50% + 20px)',
    right: 'calc(50% + 20px)',
  },
  active: {},
  completed: {},
  disabled: {},
  line: {
    display: 'block',
    borderColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[600],
  },
  lineHorizontal: {
    borderTopStyle: 'solid',
    borderTopWidth: 1,
  },
  lineVertical: {
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    minHeight: 24,
  },
});

const StepConnector = React.forwardRef(function StepConnector(props, ref) {
  const {
    className: classNameProp,
    orientation = 'horizontal',
    alternativeLabel = false,
    index,
    active,
    completed,
    disabled,
    ...other
  } = props;

  const classes = useClasses(styles);

  return (
    <div
      className={cx(
        classes.root,
        classes[orientation],
        {
          [classes.alternativeLabel]: alternativeLabel,
          [classes.active]: active,
          [classes.completed]: completed,
          [classes.disabled]: disabled,
        },
        classNameProp,
      )}
      ref={ref}
      {...other}
    >
      <span
        className={cx(classes.line, {
          [classes.lineHorizontal]: orientation === 'horizontal',
          [classes.lineVertical]: orientation === 'vertical',
        })}
      />
    </div>
  );
});

StepConnector.propTypes = {
  active: PropTypes.bool,
  alternativeLabel: PropTypes.bool,
  completed: PropTypes.bool,
  disabled: PropTypes.bool,
  index: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default StepConnector;
