import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

export const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto',
  },
  spacing: {
    '& > * + *': {
      marginLeft: 8,
    },
  },
};

const DialogActions = props => {
  const { disableSpacing = false, className, ...other } = props;
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

DialogActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disableSpacing: PropTypes.bool,
};

export default DialogActions;
