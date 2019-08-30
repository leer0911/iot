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
});

const InputBase = props => {
  const {
    className,
    inputComponent = 'input',
    multiline = false,
    rows,
    rowsMax,
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
          [classes.inputMultiline]: multiline,
          [classes.disabled]: disabled,
        },
        className,
      )}
      rows={rows}
      disabled={disabled}
      {...other}
    />
  );
};

InputBase.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputBase;
