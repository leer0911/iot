import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import formControlState from '../FormControl/formControlState';
import useFormControl from '../FormControl/useFormControl';

export const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
    ...theme.typography.body1,
    lineHeight: 1,
    padding: 0,
    '&$focused': {
      color:
        theme.palette.primary[
          theme.palette.type === 'light' ? 'dark' : 'light'
        ],
    },
    '&$disabled': {
      color: theme.palette.text.disabled,
    },
    '&$error': {
      color: theme.palette.error.main,
    },
  },
  focused: {},
  disabled: {},
  error: {},
  filled: {},
  required: {},
  asterisk: {
    '&$error': {
      color: theme.palette.error.main,
    },
  },
});

const FormLabel = React.forwardRef(function FormLabel(props, ref) {
  const {
    children,
    className: classNameProp,
    component: Component = 'label',
    disabled,
    error,
    filled,
    focused,
    required,
    ...other
  } = props;

  const classes = useClasses(styles);
  const formControl = useFormControl();
  const fcs = formControlState({
    props,
    formControl,
    states: ['required', 'focused', 'disabled', 'error', 'filled'],
  });

  return (
    <Component
      className={cx(
        classes.root,
        {
          [classes.disabled]: fcs.disabled,
          [classes.error]: fcs.error,
          [classes.filled]: fcs.filled,
          [classes.focused]: fcs.focused,
          [classes.required]: fcs.required,
        },
        classNameProp,
      )}
      ref={ref}
      {...other}
    >
      {children}
      {fcs.required && (
        <span
          className={cx(classes.asterisk, {
            [classes.error]: fcs.error,
          })}
        >
          &thinsp;{'*'}
        </span>
      )}
    </Component>
  );
});

FormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  filled: PropTypes.bool,
  focused: PropTypes.bool,
  required: PropTypes.bool,
};

export default FormLabel;
