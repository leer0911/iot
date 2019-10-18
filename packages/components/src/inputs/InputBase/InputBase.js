import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import formControlState from '../FormControl/formControlState';
import { FormControlContext, useFormControl } from '../FormControl';

import TextareaAutosize from '../TextareaAutosize';
import { isFilled } from './utils';

export const styles = theme => {
  const light = theme.palette.type === 'light';
  const placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
  };
  const placeholderHidden = {
    opacity: '0 !important',
  };
  const placeholderVisible = {
    opacity: light ? 0.42 : 0.5,
  };
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '1.1875em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
    },
    disabled: {
      color: theme.palette.text.disabled,
      cursor: 'default',
    },
    fullWidth: {
      width: '100%',
    },
    input: {
      font: 'inherit',
      color: 'currentColor',
      padding: `${8 - 2}px 0 ${8 - 1}px`,
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1875em',
      margin: 0,
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      minWidth: 0,
      width: '100%',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      '&:-ms-input-placeholder': placeholder,
      '&::-ms-input-placeholder': placeholder,
      '&:focus': {
        outline: 0,
      },
      '&:invalid': {
        boxShadow: 'none',
      },
    },
    hiddenPlaceholder: {
      '&::-webkit-input-placeholder': placeholderHidden,
      '&::-moz-placeholder': placeholderHidden, // Firefox 19+
      '&:-ms-input-placeholder': placeholderHidden, // IE 11
      '&::-ms-input-placeholder': placeholderHidden, // Edge
      '&:focus::-webkit-input-placeholder': placeholderVisible,
      '&:focus::-moz-placeholder': placeholderVisible, // Firefox 19+
      '&:focus:-ms-input-placeholder': placeholderVisible, // IE 11
      '&:focus::-ms-input-placeholder': placeholderVisible, // Edge
    },
    inputMarginDense: {
      paddingTop: 4 - 1,
    },
    error: {},
    focused: {},
    multilineDense: {},
    inputHiddenLabel: {},
    inputHiddenLabelDense: {},
    inputAdornedStart: {},
    inputAdornedEnd: {},
    multiline: {
      padding: `${8 - 2}px 0 ${8 - 1}px`,
    },
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0,
    },
  };
};

const InputBase = props => {
  const {
    className: classNameProp,
    classes: classesProp,
    inputComponent = 'input',
    autoComplete,
    autoFocus,
    disabled,
    value,
    defaultValue,
    id,
    name,
    type = 'text',
    readOnly,
    rows,
    rowsMax,
    margin,
    startAdornment,
    endAdornment,
    error,
    fullWidth = false,
    multiline = false,
    onBlur,
    onChange,
    onClick,
    onFocus,
    placeholder,
    renderSuffix,
    inputProps: { className: inputPropsClassName, ...inputPropsProp } = {},
    ...other
  } = props;

  const classes = useClasses(styles, { classes: classesProp });

  const { current: isControlled } = React.useRef(value != null);

  const inputRef = React.useRef();

  const [focused, setFocused] = React.useState(false);
  const formControl = useFormControl();

  const fcs = formControlState({
    props,
    formControl,
    states: [
      'disabled',
      'error',
      'hiddenLabel',
      'margin',
      'required',
      'filled',
    ],
  });

  fcs.focused = formControl ? formControl.focused : focused;

  React.useEffect(() => {
    if (!formControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [formControl, disabled, focused, onBlur]);

  const checkDirty = React.useCallback(
    obj => {
      if (isFilled(obj)) {
        if (formControl && formControl.onFilled) {
          formControl.onFilled();
        }
      } else if (formControl && formControl.onEmpty) {
        formControl.onEmpty();
      }
    },
    [formControl],
  );

  React.useLayoutEffect(() => {
    if (isControlled) {
      checkDirty({ value });
    }
  }, [value, checkDirty, isControlled]);

  const handleFocus = event => {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (formControl && formControl.onFocus) {
      formControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }

    if (formControl && formControl.onBlur) {
      formControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      checkDirty({
        value: element.value,
      });
    }

    if (onChange) {
      onChange(event, ...args);
    }
  };

  const handleClick = event => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  let InputComponent = inputComponent;
  let inputProps = {
    ...inputPropsProp,
    ref: inputRef,
  };

  if (typeof InputComponent !== 'string') {
    inputProps = {
      type,
      ...inputProps,
      ref: null,
    };
  } else if (multiline) {
    if (rows && !rowsMax) {
      InputComponent = 'textarea';
    } else {
      inputProps = {
        rows,
        rowsMax,
        ...inputProps,
      };
      InputComponent = TextareaAutosize;
    }
  } else {
    inputProps = {
      type,
      ...inputProps,
    };
  }

  // 用于 label 和 palceholder 重叠时的样式标识
  let shrink = fcs.filled || fcs.focused || fcs.adornedStart;

  return (
    <div
      className={cx(classes.root, classNameProp, {
        [classes.disabled]: fcs.disabled,
        [classes.error]: fcs.error,
        [classes.focused]: fcs.focused,
        [classes.marginDense]: fcs.margin === 'dense',
        [classes.multiline]: multiline,
        [classes.multilineDense]: multiline && fcs.margin === 'dense',
        [classes.formControl]: formControl,
        [classes.fullWidth]: fullWidth,
        [classes.adornedStart]: startAdornment,
        [classes.adornedEnd]: endAdornment,
      })}
      onClick={handleClick}
      {...other}
    >
      {startAdornment}
      <FormControlContext.Provider value={null}>
        <InputComponent
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={cx(
            classes.input,
            {
              [classes.disabled]: fcs.disabled,
              [classes.inputMarginDense]: fcs.margin === 'dense',
              [classes.inputHiddenLabel]: fcs.hiddenLabel,
              [classes.inputHiddenLabelDense]:
                fcs.hiddenLabel && fcs.margin === 'dense',
              [classes.inputAdornedStart]: startAdornment,
              [classes.inputAdornedEnd]: endAdornment,
              [classes.hiddenPlaceholder]: formControl && !shrink,
              [classes.inputMultiline]: multiline,
            },
            inputPropsClassName,
          )}
          defaultValue={defaultValue}
          disabled={fcs.disabled}
          id={id}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          required={fcs.required}
          rows={rows}
          value={value}
          {...inputProps}
        />
      </FormControlContext.Provider>
      {endAdornment}
      {renderSuffix
        ? renderSuffix({
            ...fcs,
            startAdornment,
          })
        : null}
    </div>
  );
};

InputBase.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  endAdornment: PropTypes.node,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  inputComponent: PropTypes.elementType,
  inputProps: PropTypes.object,
  margin: PropTypes.oneOf(['dense', 'none']),
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  renderSuffix: PropTypes.func,
  required: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startAdornment: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.any,
};

export default InputBase;
