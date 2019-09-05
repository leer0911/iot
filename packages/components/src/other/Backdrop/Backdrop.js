import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import Fade from '../Fade';

export const styles = {
  root: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

const Backdrop = props => {
  const { children, className, invisible = false, open, ...other } = props;

  const classes = useClasses(styles);

  return (
    <Fade
      className={cx(
        classes.root,
        {
          [classes.invisible]: invisible,
        },
        className,
      )}
      in={open}
      {...other}
    >
      {children}
    </Fade>
  );
};

Backdrop.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  invisible: PropTypes.bool,
  open: PropTypes.bool.isRequired,
};

export default Backdrop;
