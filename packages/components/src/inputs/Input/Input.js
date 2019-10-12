import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import InputBase from '../InputBase';

export const styles = theme => {
  const light = theme.palette.type === 'light';
  const bottomLineColor = light
    ? 'rgba(0, 0, 0, 0.42)'
    : 'rgba(255, 255, 255, 0.7)';

  return {
    underline: {
      '&:after': {
        borderBottom: `2px solid ${
          theme.palette.primary[light ? 'dark' : 'light']
        }`,
        left: 0,
        bottom: 0,
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut,
        }),
        pointerEvents: 'none',
      },
      '&:before': {
        borderBottom: `1px solid ${bottomLineColor}`,
        left: 0,
        bottom: 0,
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter,
        }),
        pointerEvents: 'none',
      },
    },
  };
};

export const InputBaseStyles = theme => {
  return {
    root: {
      position: 'relative',
    },
    formControl: {
      marginTop: 16,
    },
    focused: {
      '&:after': {
        transform: 'scaleX(1)',
      },
    },
    error: {
      '&:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)',
      },
    },
  };
};

const Input = props => {
  const {
    type = 'text',
    disableUnderline,
    fullWidth = false,
    multiline = false,
    ...other
  } = props;

  const classes = useClasses(styles);

  return (
    <InputBase
      className={cx({
        [classes.underline]: !disableUnderline,
      })}
      classes={InputBaseStyles}
      fullWidth={fullWidth}
      multiline={multiline}
      type={type}
      {...other}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  inputComponent: PropTypes.elementType,
  type: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  disableUnderline: PropTypes.bool,
  multiline: PropTypes.bool,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  margin: PropTypes.oneOf(['dense', 'none']),
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
