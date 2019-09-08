import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import Input from '../Input';
import FilledInput from '../FilledInput';
import OutlinedInput from '../OutlinedInput';
import InputLabel from '../InputLabel';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';

const variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
};

export const styles = {
  root: {},
};

const TextField = props => {
  const {
    children,
    className: classNameProp,
    variant = 'standard',
    label,
    id,
    rows,
    rowsMax,
    type,
    value,
    name,
    placeholder,
    helperText,
    FormHelperTextProps,
    autoComplete,
    autoFocus,
    required = false,
    error,
    defaultValue,
    fullWidth,
    hiddenLabel,
    InputLabelProps,
    inputProps,
    InputProps,
    multiline,
    onBlur,
    onChange,
    onFocus,
    ...other
  } = props;

  const classes = useClasses(styles);

  const [labelWidth, setLabelWidth] = React.useState(0);
  const labelRef = React.useRef(null);

  React.useEffect(() => {
    if (variant === 'outlined') {
      const labelNode = ReactDOM.findDOMNode(labelRef.current);
      setLabelWidth(labelNode != null ? labelNode.offsetWidth : 0);
    }
  }, [variant, required, label]);

  const InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    InputMore.labelWidth = labelWidth;
  }

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const InputComponent = variantComponent[variant];

  const InputElement = (
    <InputComponent
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      fullWidth={fullWidth}
      multiline={multiline}
      name={name}
      rows={rows}
      rowsMax={rowsMax}
      type={type}
      value={value}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      inputProps={inputProps}
      {...InputMore}
      {...InputProps}
    />
  );

  return (
    <FormControl
      className={cx(classes.root, classNameProp)}
      variant={variant}
      error={error}
      fullWidth={fullWidth}
      hiddenLabel={hiddenLabel}
      required={required}
      {...other}
    >
      {label && (
        <InputLabel htmlFor={id} ref={labelRef} {...InputLabelProps}>
          {label}
        </InputLabel>
      )}
      {InputElement}
      {helperText && (
        <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

TextField.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  FormHelperTextProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  hiddenLabel: PropTypes.bool,
  id: PropTypes.string,
  InputLabelProps: PropTypes.object,
  InputProps: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.node,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.any,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default TextField;
