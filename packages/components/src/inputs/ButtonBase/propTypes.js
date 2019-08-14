import PropTypes from 'prop-types';

export default {
  action: PropTypes.func,
  centerRipple: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disableTouchRipple: PropTypes.bool,
  focusRipple: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onDragLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onFocusVisible: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  TouchRippleProps: PropTypes.object,
  type: PropTypes.oneOf(['submit', 'reset', 'button'])
};
