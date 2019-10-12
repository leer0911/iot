import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { useMeasure } from '../../utils';

const Slide = props => {
  const {
    in: open = true,
    direction = 'down',
    children,
    onEnter,
    onExit,
    component,
    ...other
  } = props;

  const [bind, rect] = useMeasure();

  const transform = useMemo(() => {
    const { top, left } = rect;

    let from = '';
    let to = '';

    if (direction === 'up') {
      from = `translateY(${-window.innerHeight}px)`;
      to = `translateY(-${top}px)`;
    }

    if (direction === 'down') {
      from = `translateY(${window.innerHeight}px)`;
      to = `translateY(-${top}px)`;
    }

    if (direction === 'left') {
      from = `translateX(${-window.innerWidth}px)`;
      to = `translateX(-${left}px)`;
    }

    if (direction === 'right') {
      from = `translateX(${window.innerWidth}px)`;
      to = `translateX(-${left}px)`;
    }

    return [from, to];
  }, [direction, rect]);

  const transitions = useTransition(open, null, {
    config: { mass: 1, tension: 500, friction: 20, clamp: true },
    from: { transform: transform[0] },
    enter: item => async (next, cancel) => {
      await next({ transform: transform[1] });
      if (open && onEnter) {
        onEnter();
      }
    },
    leave: item => async (next, cancel) => {
      await next({ transform: transform[0] });
      if (!open && onExit) {
        onExit();
      }
    },
  });

  // 注意：需要支持自定义 component 的情况
  let Animate = animated.div;
  if (component) {
    Animate = animated(component);
  }

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Animate key={key} style={props} {...bind} {...other}>
          {children}
        </Animate>
      ),
  );
};

Slide.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
};

export default Slide;
