import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import { css } from 'emotion';
import { useClasses } from '../../styles';

let id = 0;

const DURATION = 150;

const containerCls = css({
  display: 'block',
  position: 'absolute',
  overflow: 'hidden',
  borderRadius: 'inherit',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  zIndex: 0,
  pointerEvents: 'none',
});

export const styles = theme => ({
  ripple: {
    opacity: 0,
    position: 'absolute',
  },
  child: {
    opacity: 1,
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
});

const RippleHub = ({ center, children }) => {
  const [items, setItems] = useState([]);
  const classes = useClasses(styles) || {};

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, transform: 'scale(0)' },
    config: { duration: DURATION },
    enter: item => async next => {
      await next({ opacity: 0.1, transform: 'scale(0.2)' });
      await next({ opacity: 0.2, transform: 'scale(0.9)' });
      next({ opacity: 0.3, transform: 'scale(1)' });
      next({ opacity: 0 });
      setItems(state => state.filter(i => i.key !== item.key));
    },
  });

  useEffect(
    () =>
      children(event => {
        if (event) {
          setItems(state => [...state, { key: id++, event }]);
        }
      }),
    [children],
  );

  useEffect(() => {
    return () => {
      // TODO: 组件卸载时，停止动画更新
    };
  }, []);

  const containerRef = useRef(null);

  const getRippleRect = useCallback(
    event => {
      const element = containerRef.current;
      const rect = element.getBoundingClientRect();

      const { width, height, left, top } = rect;
      const { clientWidth, clientHeight } = element;
      const { clientX, clientY } = event || {};

      let rippleX;
      let rippleY;
      let rippleSize;

      if (center || !clientX || (clientX === 0 && clientY === 0)) {
        rippleX = Math.round(width / 2);
        rippleY = Math.round(height / 2);
      } else {
        rippleX = Math.round(clientX - left);
        rippleY = Math.round(clientY - top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * width ** 2 + height ** 2) / 3);
      } else {
        const sizeX =
          Math.max(Math.abs(clientWidth - rippleX), rippleX) * 2 + 2;
        const sizeY =
          Math.max(Math.abs(clientHeight - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
      }
      return {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX,
      };
    },
    [center],
  );

  return (
    <div className={containerCls} ref={containerRef}>
      {transitions.map(({ key, item, props, state }) => (
        <animated.span
          className={classes.ripple}
          style={{ ...getRippleRect(item.event), ...props }}
          key={key}
        >
          <animated.span className={classes.child} />
        </animated.span>
      ))}
    </div>
  );
};

export default RippleHub;
