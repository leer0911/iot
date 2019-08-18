import PropTypes from 'prop-types';

export default {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  endAdornment: PropTypes.node,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  margin: PropTypes.oneOf(['dense', 'none']),
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onEmpty: PropTypes.func,
  onFilled: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  renderPrefix: PropTypes.func,
  required: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  select: PropTypes.bool,
  startAdornment: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.any,
};
