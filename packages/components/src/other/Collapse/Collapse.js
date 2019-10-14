import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import { Transition } from 'react-transition-group';
import { duration } from '../styles/transitions';
import { getTransitionProps } from '../transitions/utils';
import useTheme from '../styles/useTheme';

export const styles = theme => ({
  container: {
    height: 0,
    overflow: 'hidden',
    transition: theme.transitions.create('height'),
  },
  entered: {
    height: 'auto',
    overflow: 'visible',
  },
  hidden: {
    visibility: 'hidden',
  },
  wrapper: {
    display: 'flex',
  },
  wrapperInner: {
    width: '100%',
  },
});

const Collapse = props => {
  const {
    children,
    className,
    collapsedHeight = '0px',
    component: Component = 'div',
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExiting,
    style,
    timeout = duration.standard,
    ...other
  } = props;

  const classes = useClasses(styles);

  const theme = useTheme();
  const timer = React.useRef();
  const wrapperRef = React.useRef(null);
  const autoTransitionDuration = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleEnter = (node, isAppearing) => {
    node.style.height = collapsedHeight;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleEntering = (node, isAppearing) => {
    const wrapperHeight = wrapperRef.current
      ? wrapperRef.current.clientHeight
      : 0;

    const { duration: transitionDuration } = getTransitionProps(
      { style, timeout },
      {
        mode: 'enter',
      },
    );

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration =
        typeof transitionDuration === 'string'
          ? transitionDuration
          : `${transitionDuration}ms`;
    }

    node.style.height = `${wrapperHeight}px`;

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  };

  const handleEntered = (node, isAppearing) => {
    node.style.height = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  };

  const handleExit = node => {
    const wrapperHeight = wrapperRef.current
      ? wrapperRef.current.clientHeight
      : 0;
    node.style.height = `${wrapperHeight}px`;

    if (onExit) {
      onExit(node);
    }
  };

  const handleExiting = node => {
    const wrapperHeight = wrapperRef.current
      ? wrapperRef.current.clientHeight
      : 0;

    const { duration: transitionDuration } = getTransitionProps(
      { style, timeout },
      {
        mode: 'exit',
      },
    );

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration =
        typeof transitionDuration === 'string'
          ? transitionDuration
          : `${transitionDuration}ms`;
    }

    node.style.height = collapsedHeight;

    if (onExiting) {
      onExiting(node);
    }
  };

  const addEndListener = (_, next) => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return (
    <Transition
      in={inProp}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExiting={handleExiting}
      addEndListener={addEndListener}
      timeout={timeout === 'auto' ? null : timeout}
      {...other}
    >
      {(state, childProps) => (
        <Component
          className={cx(
            classes.container,
            {
              [classes.entered]: state === 'entered',
              [classes.hidden]:
                state === 'exited' && !inProp && collapsedHeight === '0px',
            },
            className,
          )}
          style={{
            minHeight: collapsedHeight,
            ...style,
          }}
          {...childProps}
        >
          <div className={classes.wrapper} ref={wrapperRef}>
            <div className={classes.wrapperInner}>{children}</div>
          </div>
        </Component>
      )}
    </Transition>
  );
};

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  collapsedHeight: PropTypes.string,
  component: PropTypes.elementType,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEntering: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  style: PropTypes.object,
};

export default Collapse;
