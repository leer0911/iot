import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import InputBase from '../InputBase';
import NotchedOutline from './NotchedOutline';

export const styles = theme => {
  const borderColor =
    theme.palette.type === 'light'
      ? 'rgba(0, 0, 0, 0.23)'
      : 'rgba(255, 255, 255, 0.23)';

  return {
    root: {
      position: 'relative',
    },
    notchedOutline: {
      borderColor,
    },
    notchedOutlineFocused: {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
    notchedOutlineError: {
      borderColor: theme.palette.error.main,
    },
    notchedOutlineDisabled: {
      borderColor: theme.palette.action.disabled,
    },
  };
};

const InputBaseStyles = theme => ({
  input: { padding: '18.5px 14px;' },
  adornedStart: {
    paddingLeft: 14,
  },
  adornedEnd: {
    paddingRight: 14,
  },
  multiline: {
    padding: '18.5px 14px',
    '&$marginDense': {
      paddingTop: 10.5,
      paddingBottom: 10.5,
    },
  },
  inputMarginDense: {
    paddingTop: 10.5,
    paddingBottom: 10.5,
  },
  inputMultiline: {
    padding: 0,
  },
  inputAdornedStart: {
    paddingLeft: 0,
  },
  inputAdornedEnd: {
    paddingRight: 0,
  },
});

const OutlinedInput = props => {
  const {
    fullWidth = false,
    labelWidth = 0,
    multiline = false,
    notched,
    type = 'text',
    ...other
  } = props;

  const classes = useClasses(styles);

  return (
    <InputBase
      renderSuffix={state => (
        <NotchedOutline
          className={cx(classes.notchedOutline, {
            [classes.notchedOutlineFocused]: state.focused,
            [classes.notchedOutlineError]: state.error,
            [classes.notchedOutlineDisabled]: state.disabled,
          })}
          labelWidth={labelWidth}
          notched={
            typeof notched !== 'undefined'
              ? notched
              : Boolean(state.startAdornment || state.filled || state.focused)
          }
        />
      )}
      className={cx(classes.root)}
      classes={InputBaseStyles}
      fullWidth={fullWidth}
      multiline={multiline}
      type={type}
      {...other}
    />
  );
};

OutlinedInput.propTypes = {
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
  labelWidth: PropTypes.number,
  margin: PropTypes.oneOf(['dense', 'none']),
  multiline: PropTypes.bool,
  name: PropTypes.string,
  notched: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startAdornment: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.any,
};

export default OutlinedInput;
