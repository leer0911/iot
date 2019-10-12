import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import Modal from '../../feedback/Modal';
import Backdrop from '../../other/Backdrop';
import Slide from '../../other/Slide';
import Paper from '../../surfaces/Paper';
import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {},
  modal: {},
  docked: {
    flex: '0 0 auto',
  },
  paper: {
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: '1 0 auto',
    zIndex: theme.zIndex.drawer,
    WebkitOverflowScrolling: 'touch',
    position: 'fixed',
    top: 0,
    outline: 0,
  },
  paperAnchorLeft: {
    left: 0,
    right: 'auto',
  },
  paperAnchorRight: {
    left: 'auto',
    right: 0,
  },
  paperAnchorTop: {
    top: 0,
    left: 0,
    bottom: 'auto',
    right: 0,
    height: 'auto',
    maxHeight: '100%',
  },
  paperAnchorBottom: {
    top: 'auto',
    left: 0,
    bottom: 0,
    right: 0,
    height: 'auto',
    maxHeight: '100%',
  },
  paperAnchorDockedLeft: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  paperAnchorDockedTop: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  paperAnchorDockedRight: {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
  paperAnchorDockedBottom: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
});

const directionMap = {
  left: 'left',
  right: 'right',
  top: 'up',
  bottom: 'down',
};

const Drawer = props => {
  const {
    className,
    children,
    variant = 'temporary',
    anchor = 'left',
    elevation = 16,
    open = false,
    onClose,
    BackdropProps,
    ModalProps: { BackdropProps: BackdropPropsProp, ...ModalProps } = {},
    PaperProps,
    SlideProps,
    ...other
  } = props;

  const classes = useClasses(styles);
  const mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;
  }, []);

  const Drawer = props => {
    return (
      <Paper
        {...props}
        className={cx(
          classes.paper,
          classes[`paperAnchor${capitalize(anchor)}`],
          {
            [classes[`paperAnchorDocked${capitalize(anchor)}`]]:
              variant !== 'temporary',
          },
        )}
        elevation={variant === 'temporary' ? elevation : 0}
        square
        {...PaperProps}
      >
        {children}
      </Paper>
    );
  };

  if (variant === 'permanent') {
    return (
      <div className={cx(classes.root, classes.docked, className)} {...other}>
        <Drawer />
      </div>
    );
  }

  const slidingDrawer = (
    <Slide
      className={classes.slide}
      in={open}
      direction={directionMap[anchor]}
      component={Drawer}
      {...SlideProps}
    />
  );

  if (variant === 'persistent') {
    return (
      <div className={cx(classes.root, classes.docked, className)} {...other}>
        {slidingDrawer}
      </div>
    );
  }

  return (
    <Modal
      BackdropComponent={Backdrop}
      className={cx(classes.root, classes.modal, className)}
      open={open}
      onClose={onClose}
      {...other}
      {...ModalProps}
    >
      {slidingDrawer}
    </Modal>
  );
};

Drawer.propTypes = {
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  className: PropTypes.string,
  children: PropTypes.node,
  elevation: PropTypes.number,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  BackdropProps: PropTypes.object,
  ModalProps: PropTypes.object,
  PaperProps: PropTypes.object,
  SlideProps: PropTypes.object,
};

export default Drawer;
