import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import Typography from '../../display/Typography';
import { FormControlContext, useFormControl } from '../FormControl';

export const styles = {
  root: {
    display: 'flex',
    height: '0.01em',
    maxHeight: '2em',
    alignItems: 'center',
  },
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16,
    },
  },
  positionStart: {
    marginRight: 8,
  },
  positionEnd: {
    marginLeft: 8,
  },
  disablePointerEvents: {
    pointerEvents: 'none',
  },
  hiddenLabel: {},
  marginDense: {},
};

const InputAdornment = props => {
  const {
    children,
    className,
    component: Component = 'div',
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp,
    ...other
  } = props;

  const classes = useClasses(styles);
  const formControl = useFormControl() || {};

  let variant = variantProp;

  if (formControl && !variant) {
    variant = formControl.variant;
  }

  return (
    <FormControlContext.Provider value={null}>
      <Component
        className={cx(
          classes.root,
          {
            [classes.filled]: variant === 'filled',
            [classes.positionStart]: position === 'start',
            [classes.positionEnd]: position === 'end',
            [classes.disablePointerEvents]: disablePointerEvents,
            [classes.marginDense]: formControl.margin === 'dense',
            [classes.hiddenLabel]: formControl.hiddenLabel,
          },
          className,
        )}
        {...other}
      >
        {typeof children === 'string' && !disableTypography ? (
          <Typography color="textSecondary">{children}</Typography>
        ) : (
          children
        )}
      </Component>
    </FormControlContext.Provider>
  );
};

InputAdornment.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disablePointerEvents: PropTypes.bool,
  disableTypography: PropTypes.bool,
  formControl: PropTypes.object,
  position: PropTypes.oneOf(['start', 'end']),
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default InputAdornment;
