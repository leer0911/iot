import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';

export const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
  },
  spacing: {
    '& > * + *': {
      marginLeft: 8,
    },
  },
};

const CardActions = props => {
  const { className, disableSpacing = false, ...other } = props;
  const classes = useClasses(styles);

  return (
    <div
      className={cx(
        classes.root,
        { [classes.spacing]: !disableSpacing },
        className,
      )}
      {...other}
    />
  );
};

CardActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disableSpacing: PropTypes.bool,
};

export default CardActions;
