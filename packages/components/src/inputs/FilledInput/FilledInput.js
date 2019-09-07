import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import InputBase from '../InputBase';

export const styles = theme => {
  const light = theme.palette.type === 'light';
  const bottomLineColor = light
    ? 'rgba(0, 0, 0, 0.42)'
    : 'rgba(255, 255, 255, 0.7)';
  const backgroundColor = light
    ? 'rgba(0, 0, 0, 0.09)'
    : 'rgba(255, 255, 255, 0.09)';

  return {
    root: {
      position: 'relative',
      backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut,
      }),
      '&:hover': {
        backgroundColor: light
          ? 'rgba(0, 0, 0, 0.13)'
          : 'rgba(255, 255, 255, 0.13)',
        '@media (hover: none)': {
          backgroundColor,
        },
      },
      '&$focused': {
        backgroundColor: light
          ? 'rgba(0, 0, 0, 0.09)'
          : 'rgba(255, 255, 255, 0.09)',
      },
      '&$disabled': {
        backgroundColor: light
          ? 'rgba(0, 0, 0, 0.12)'
          : 'rgba(255, 255, 255, 0.12)',
      },
    },
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
      '&$focused:after': {
        transform: 'scaleX(1)',
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)',
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
      '&:hover:before': {
        borderBottom: `1px solid ${theme.palette.text.primary}`,
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted',
      },
    },
    focused: {},
    disabled: {},
    adornedStart: {
      paddingLeft: 12,
    },
    adornedEnd: {
      paddingRight: 12,
    },
    error: {},
    marginDense: {},
    multiline: {
      padding: '27px 12px 10px',
      '&$marginDense': {
        paddingTop: 23,
        paddingBottom: 6,
      },
    },
    input: {
      padding: '27px 12px 10px',
    },
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6,
    },
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      '&$inputMarginDense': {
        paddingTop: 10,
        paddingBottom: 11,
      },
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
  };
};

const FilledInput = props => {
  const {
    type = 'text',
    inputComponent = 'input',
    fullWidth = false,
    multiline = false,
    disableUnderline,
    ...other
  } = props;

  const classes = useClasses(styles);

  return (
    <InputBase
      classes={{
        ...classes,
        root: cx(classes.root, {
          [classes.underline]: !disableUnderline,
        }),
        underline: null,
      }}
      fullWidth={fullWidth}
      inputComponent={inputComponent}
      multiline={multiline}
      type={type}
      {...other}
    />
  );
};

FilledInput.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  disableUnderline: PropTypes.bool,
  endAdornment: PropTypes.node,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  inputComponent: PropTypes.elementType,
  inputProps: PropTypes.object,
  margin: PropTypes.oneOf(['dense', 'none']),
  multiline: PropTypes.bool,
  name: PropTypes.string,
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

export default FilledInput;
