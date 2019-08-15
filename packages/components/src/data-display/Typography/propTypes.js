import PropTypes from 'prop-types';

export default {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
  component: PropTypes.elementType,
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),
  variantMapping: PropTypes.object
};
