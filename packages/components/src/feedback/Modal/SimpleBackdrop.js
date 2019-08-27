import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

export const styles = {
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    touchAction: 'none',
  },
  invisible: {
    backgroundColor: 'transparent',
  },
};

const SimpleBackdrop = props => {
  const { invisible = false, open, ...other } = props;

  const classes = useClasses(styles);

  return open ? (
    <div
      className={cx(classes.root, { [classes.invisible]: invisible })}
      {...other}
    />
  ) : null;
};

SimpleBackdrop.propTypes = {
  invisible: PropTypes.bool,
  open: PropTypes.bool.isRequired,
};

export default SimpleBackdrop;
