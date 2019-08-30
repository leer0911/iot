import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import Textarea from './Textarea';

export const styles = theme => ({
  root: {
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
    placeholder: {
      color: 'currentColor',
      opacity: theme.palette.type === 'light' ? 0.42 : 0.5,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shorter,
      }),
    },
    '&:focus': {
      outline: 0,
    },
    '&:invalid': {
      boxShadow: 'none',
    },
  },
  disabled: {
    opacity: 1,
  },
  multiline: {
    height: 'auto',
    resize: 'none',
    padding: 0,
  },
  inputTypeSearch: {
    '-moz-appearance': 'textfield',
    '-webkit-appearance': 'textfield',
  },
});

const InputBase = props => {
  const {
    className: classNameProp,
    inputComponent = 'input',
    type = 'text',
    multiline = false,
    rows,
    rowsMax,
    value,
    disabled,
    ...other
  } = props;

  const classes = useClasses(styles);

  let InputComponent = inputComponent;

  if (multiline) {
    if (rows && !rowsMax) {
      InputComponent = 'textarea';
    } else {
      InputComponent = Textarea;
    }
  }

  return (
    <InputComponent
      className={cx(
        classes.root,
        {
          [classes.inputTypeSearch]: type === 'search',
          [classes.inputMultiline]: multiline,
          [classes.disabled]: disabled,
        },
        classNameProp,
      )}
      rows={rows}
      value={value}
      {...other}
    />
  );
};

InputBase.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.any,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputBase;
