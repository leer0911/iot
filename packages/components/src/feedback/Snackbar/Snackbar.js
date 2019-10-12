import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import { capitalize, createChainedFunction } from '../../utils/';
import Grow from '../../other/Grow';
import ClickAwayListener from '../../other/ClickAwayListener';
import SnackbarContent from '../SnackbarContent';

export const styles = theme => {
  const top1 = { top: 8 };
  const bottom1 = { bottom: 8 };
  const right = { justifyContent: 'flex-end' };
  const left = { justifyContent: 'flex-start' };
  const top3 = { top: 24 };
  const bottom3 = { bottom: 24 };
  const right3 = { right: 24 };
  const left3 = { left: 24 };
  const center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)',
  };

  return {
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 8,
      right: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    anchorOriginTopCenter: {
      ...top1,
      [theme.breakpoints.up('sm')]: {
        ...top3,
        ...center,
      },
    },
    anchorOriginBottomCenter: {
      ...bottom1,
      [theme.breakpoints.up('sm')]: {
        ...bottom3,
        ...center,
      },
    },
    anchorOriginTopRight: {
      ...top1,
      ...right,
      [theme.breakpoints.up('sm')]: {
        left: 'auto',
        ...top3,
        ...right3,
      },
    },
    anchorOriginBottomRight: {
      ...bottom1,
      ...right,
      [theme.breakpoints.up('sm')]: {
        left: 'auto',
        ...bottom3,
        ...right3,
      },
    },
    anchorOriginTopLeft: {
      ...top1,
      ...left,
      [theme.breakpoints.up('sm')]: {
        right: 'auto',
        ...top3,
        ...left3,
      },
    },
    anchorOriginBottomLeft: {
      ...bottom1,
      ...left,
      [theme.breakpoints.up('sm')]: {
        right: 'auto',
        ...bottom3,
        ...left3,
      },
    },
  };
};

const Snackbar = React.forwardRef(function Snackbar(props, ref) {
  const {
    children,
    className,
    open,
    action,
    message,
    anchorOrigin: { vertical, horizontal } = {
      vertical: 'bottom',
      horizontal: 'center',
    },
    ClickAwayListenerProps,
    ContentProps,
    TransitionProps,
    TransitionComponent = Grow,
    autoHideDuration,
    onClose,
    onEnter,
    onExit,
    ...other
  } = props;

  const classes = useClasses(styles);
  const timerAutoHide = React.useRef();
  const [exited, setExited] = React.useState(true);

  const setAutoHideTimer = React.useCallback(
    autoHideDurationParam => {
      const autoHideDurationBefore =
        autoHideDurationParam != null
          ? autoHideDurationParam
          : autoHideDuration;

      if (!onClose || autoHideDurationBefore == null) {
        return;
      }

      clearTimeout(timerAutoHide.current);
      timerAutoHide.current = setTimeout(() => {
        const autoHideDurationAfter =
          autoHideDurationParam != null
            ? autoHideDurationParam
            : autoHideDuration;
        if (!onClose || autoHideDurationAfter == null) {
          return;
        }
        onClose(null, 'timeout');
      }, autoHideDurationBefore);
    },
    [autoHideDuration, onClose],
  );

  React.useEffect(() => {
    if (open) {
      setAutoHideTimer();
    }

    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, setAutoHideTimer]);

  const handleClickAway = event => {
    if (onClose) {
      onClose(event, 'clickaway');
    }
  };

  const handleExited = () => {
    setExited(true);
  };

  const handleEnter = () => {
    setExited(false);
  };

  if (!open && exited) {
    return null;
  }

  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
      {...ClickAwayListenerProps}
    >
      <div
        className={cx(
          classes.root,
          classes[
            `anchorOrigin${capitalize(vertical)}${capitalize(horizontal)}`
          ],
          className,
        )}
        ref={ref}
        {...other}
      >
        <TransitionComponent
          appear
          in={open}
          onEnter={createChainedFunction(handleEnter, onEnter)}
          onExit={createChainedFunction(handleExited, onExit)}
          direction={vertical === 'top' ? 'down' : 'up'}
          {...TransitionProps}
        >
          {children || (
            <SnackbarContent
              message={message}
              action={action}
              {...ContentProps}
            />
          )}
        </TransitionComponent>
      </div>
    </ClickAwayListener>
  );
});

Snackbar.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  open: PropTypes.bool,
  action: PropTypes.node,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
    vertical: PropTypes.oneOf(['top', 'bottom']).isRequired,
  }),
  autoHideDuration: PropTypes.number,
  ClickAwayListenerProps: PropTypes.object,
  ContentProps: PropTypes.object,
  key: PropTypes.any,
  message: PropTypes.node,
  onClose: PropTypes.func,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  TransitionComponent: PropTypes.elementType,
  TransitionProps: PropTypes.object,
};

export default Snackbar;
