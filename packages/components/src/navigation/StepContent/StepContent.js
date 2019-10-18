import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import Collapse from '../../other/Collapse';

export const styles = theme => ({
  root: {
    marginTop: 8,
    marginLeft: 12,
    paddingLeft: 8 + 12,
    paddingRight: 8,
    borderLeft: `1px solid ${
      theme.palette.type === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[600]
    }`,
  },
  last: {
    borderLeft: 'none',
  },
});

const StepContent = props => {
  const {
    children,
    className,
    active,
    alternativeLabel,
    completed,
    last,
    optional,
    orientation,
    TransitionComponent = Collapse,
    TransitionProps,
    ...other
  } = props;

  const classes = useClasses(styles);

  return (
    <div
      className={cx(classes.root, { [classes.last]: last }, className)}
      {...other}
    >
      <TransitionComponent
        className={classes.transition}
        in={active}
        {...TransitionProps}
      >
        {children}
      </TransitionComponent>
    </div>
  );
};

StepContent.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node,
  completed: PropTypes.bool,
  last: PropTypes.bool,
  optional: PropTypes.bool,
  TransitionComponent: PropTypes.elementType,
};

export default StepContent;
