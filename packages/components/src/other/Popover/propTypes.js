import PropTypes from 'prop-types';

const anchorOrigin = PropTypes.shape({
  horizontal: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['left', 'center', 'right'])]).isRequired,
  vertical: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['top', 'center', 'bottom'])]).isRequired,
});

const anchorPosition = PropTypes.shape({
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
});

const anchorReference = PropTypes.oneOf(['anchorEl', 'anchorPosition', 'none']);

const transformOrigin = PropTypes.shape({
  horizontal: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['left', 'center', 'right'])]).isRequired,
  vertical: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['top', 'center', 'bottom'])]).isRequired,
});

export default {
  children: PropTypes.node,
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  action: PropTypes.node,
  anchorReference,
  anchorPosition,
  anchorEl: PropTypes.any,
  anchorOrigin,
  transformOrigin,
  marginThreshold: PropTypes.number,

  elevation: PropTypes.number,
  getContentAnchorEl: PropTypes.func,
  ModalClasses: PropTypes.object,

  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,

  TransitionComponent: PropTypes.elementType,
  TransitionProps: PropTypes.object,
};
