import PropTypes from 'prop-types';

export default {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  as: PropTypes.elementType,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
};
