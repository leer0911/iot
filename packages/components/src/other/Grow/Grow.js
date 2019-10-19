import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

const Grow = props => {
  const { in: open, children, onEnter, onExit, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExit) {
        onExit();
      }
    },
  });

  return (
    <animated.div style={style} {...other}>
      {children}
    </animated.div>
  );
};

Grow.propTypes = {
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  style: PropTypes.object,
};

export default Grow;
