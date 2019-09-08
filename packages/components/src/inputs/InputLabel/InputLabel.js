import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import formControlState from '../FormControl/formControlState';
import useFormControl from '../FormControl/useFormControl';
import FormLabel from '../FormLabel';

export const styles = theme => ({
  root: {
    display: 'block',
    transformOrigin: 'top left',
  },
  formControl: {
    position: 'absolute',
    left: 0,
    top: 0,
    transform: 'translate(0, 24px) scale(1)',
  },
  marginDense: {
    transform: 'translate(0, 21px) scale(1)',
  },
  shrink: {
    transform: 'translate(0, 1.5px) scale(0.75)',
    transformOrigin: 'top left',
  },
  animated: {
    transition: theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  filled: {
    zIndex: 1,
    pointerEvents: 'none',
    transform: 'translate(12px, 20px) scale(1)',
  },
  filledShrink: {
    transform: 'translate(12px, 10px) scale(0.75)',
  },
  filledShrinkDense: {
    transform: 'translate(12px, 7px) scale(0.75)',
  },
  outlined: {
    zIndex: 1,
    pointerEvents: 'none',
    transform: 'translate(14px, 20px) scale(1)',
  },
  outlinedShrink: {
    transform: 'translate(14px, -6px) scale(0.75)',
  },
  outlinedShrinkDense: {
    transform: 'translate(14px, -6px) scale(0.75)',
  },
});

const InputLabel = React.forwardRef((props, ref) => {
  const {
    className,
    disableAnimation = false,
    margin,
    shrink: shrinkProp,
    variant,
    ...other
  } = props;

  const classes = useClasses(styles);

  const formControl = useFormControl();
  let shrink = shrinkProp;

  if (typeof shrink === 'undefined' && formControl) {
    shrink =
      formControl.filled || formControl.focused || formControl.adornedStart;
  }

  const fcs = formControlState({
    props,
    formControl,
    states: ['margin', 'variant'],
  });

  return (
    <FormLabel
      data-shrink={shrink}
      className={cx(
        classes.root,
        {
          [classes.formControl]: formControl,
          [classes.animated]: !disableAnimation,
          [classes.marginDense]: fcs.margin === 'dense',
          [classes.shrink]: shrink,
          [classes.filled]: fcs.variant === 'filled',
          [classes.filledShrink]: fcs.variant === 'filled' && shrink,
          [classes.filledShrinkDense]:
            fcs.variant === 'filled' && shrink && fcs.margin === 'dense',
          [classes.outlined]: fcs.variant === 'outlined',
          [classes.outlinedShrink]: fcs.variant === 'outlined' && shrink,
        },
        className,
      )}
      ref={ref}
      {...other}
    />
  );
});

InputLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disableAnimation: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  focused: PropTypes.bool,
  required: PropTypes.bool,
  shrink: PropTypes.bool,
  margin: PropTypes.oneOf(['dense']),
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default InputLabel;
