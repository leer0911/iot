import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import { capitalize } from '../../utils/helpers';
import Modal from '../Modal';
import Paper from '../../surfaces/Paper';
import Fade from '../../other/Fade';
import Backdrop from '../../other/Backdrop';

export const styles = theme => ({
  root: {},
  scrollPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollBody: {
    overflowY: 'auto',
    overflowX: 'hidden',
    textAlign: 'center',
    '&:after': {
      content: '""',
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '100%',
      width: '0',
    },
  },
  container: {
    height: '100%',
    outline: 0,
  },
  paper: {
    margin: 48,
    position: 'relative',
    overflowY: 'auto',
  },
  paperScrollPaper: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100% - 96px)',
  },
  paperScrollBody: {
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'left',
  },
  paperWidthFalse: {
    maxWidth: 'calc(100% - 96px)',
  },
  paperWidthXs: {
    maxWidth: Math.max(theme.breakpoints.values.xs, 444),
    '&$paperScrollBody': {
      [theme.breakpoints.down(
        Math.max(theme.breakpoints.values.xs, 444) + 48 * 2,
      )]: {
        maxWidth: 'calc(100% - 96px)',
      },
    },
  },
  paperWidthSm: {
    maxWidth: theme.breakpoints.values.sm,
    '&$paperScrollBody': {
      [theme.breakpoints.down(theme.breakpoints.values.sm + 48 * 2)]: {
        maxWidth: 'calc(100% - 96px)',
      },
    },
  },
  paperWidthMd: {
    maxWidth: theme.breakpoints.values.md,
    '&$paperScrollBody': {
      [theme.breakpoints.down(theme.breakpoints.values.md + 48 * 2)]: {
        maxWidth: 'calc(100% - 96px)',
      },
    },
  },
  paperWidthLg: {
    maxWidth: theme.breakpoints.values.lg,
    '&$paperScrollBody': {
      [theme.breakpoints.down(theme.breakpoints.values.lg + 48 * 2)]: {
        maxWidth: 'calc(100% - 96px)',
      },
    },
  },
  paperWidthXl: {
    maxWidth: theme.breakpoints.values.xl,
    '&$paperScrollBody': {
      [theme.breakpoints.down(theme.breakpoints.values.xl + 48 * 2)]: {
        maxWidth: 'calc(100% - 96px)',
      },
    },
  },
  paperFullWidth: {
    width: 'calc(100% - 96px)',
  },
  paperFullScreen: {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: 'none',
    borderRadius: 0,
    '&$paperScrollBody': {
      margin: 0,
      maxWidth: '100%',
    },
  },
});

const Dialog = props => {
  const {
    className,
    children,
    open,
    scroll = 'paper',
    maxWidth = 'sm',
    disableBackdropClick = false,
    fullScreen = false,
    fullWidth = false,
    onBackdropClick,
    onClose,
    onEnter,
    onExit,
    PaperComponent = Paper,
    PaperProps = {},
    BackdropProps,
    TransitionComponent = Fade,
    TransitionProps,
    ...other
  } = props;

  const classes = useClasses(styles);

  const mouseDownTarget = React.useRef();
  const handleMouseDown = event => {
    mouseDownTarget.current = event.target;
  };
  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }

    // Make sure the event starts and ends on the same DOM element.
    if (event.target !== mouseDownTarget.current) {
      return;
    }

    mouseDownTarget.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return (
    <Modal
      className={cx(classes.root, className)}
      BackdropComponent={Backdrop}
      BackdropProps={{
        ...BackdropProps,
      }}
      disableBackdropClick={disableBackdropClick}
      onClose={onClose}
      open={open}
      {...other}
    >
      <TransitionComponent
        className={cx(
          classes.container,
          classes[`scroll${capitalize(scroll)}`],
        )}
        in={open}
        onEnter={onEnter}
        onExit={onExit}
        onClick={handleBackdropClick}
        onMouseDown={handleMouseDown}
        {...TransitionProps}
      >
        <PaperComponent
          elevation={24}
          {...PaperProps}
          className={cx(
            classes.paper,
            classes[`paperScroll${capitalize(scroll)}`],
            classes[`paperWidth${capitalize(String(maxWidth))}`],
            {
              [classes.paperFullScreen]: fullScreen,
              [classes.paperFullWidth]: fullWidth,
            },
            PaperProps.className,
          )}
        >
          {children}
        </PaperComponent>
      </TransitionComponent>
    </Modal>
  );
};

Dialog.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  scroll: PropTypes.oneOf(['body', 'paper']),
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
  disableBackdropClick: PropTypes.bool,
  fullScreen: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onBackdropClick: PropTypes.func,
  onClose: PropTypes.func,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  PaperComponent: PropTypes.elementType,
  PaperProps: PropTypes.object,
  BackdropProps: PropTypes.object,
  TransitionComponent: PropTypes.elementType,
  TransitionProps: PropTypes.object,
};

export default Dialog;
