import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import formControlState from '../FormControl/formControlState';
import useFormControl from '../FormControl/useFormControl';

export const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
    ...theme.typography.caption,
    textAlign: 'left',
    marginTop: 8,
    lineHeight: '1em',
    minHeight: '1em',
  },
  error: {
    color: theme.palette.error.main,
  },
  disabled: {
    color: theme.palette.text.disabled,
  },
  marginDense: {
    marginTop: 4,
  },
  contained: {
    margin: '8px 14px 0',
  },
});

const FormHelperText = props => {
  const {
    className: classNameProp,
    component: Component = 'p',
    disabled,
    error,
    filled,
    focused,
    margin,
    required,
    variant,
    ...other
  } = props;

  const classes = useClasses(styles);

  const formControl = useFormControl();
  const fcs = formControlState({
    props,
    formControl,
    states: [
      'variant',
      'margin',
      'disabled',
      'error',
      'filled',
      'focused',
      'required',
    ],
  });

  return (
    <Component
      className={cx(
        classes.root,
        {
          [classes.contained]:
            fcs.variant === 'filled' || fcs.variant === 'outlined',
          [classes.marginDense]: fcs.margin === 'dense',
          [classes.disabled]: fcs.disabled,
          [classes.error]: fcs.error,
          [classes.filled]: fcs.filled,
          [classes.focused]: fcs.focused,
          [classes.required]: fcs.required,
        },
        classNameProp,
      )}
      {...other}
    />
  );
};

FormHelperText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  filled: PropTypes.bool,
  focused: PropTypes.bool,
  margin: PropTypes.oneOf(['dense']),
  required: PropTypes.bool,
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default FormHelperText;
