import PropTypes from 'prop-types';

export default {
  component: PropTypes.elementType,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),
  color: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  variantMapping: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
};
