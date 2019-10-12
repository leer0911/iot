import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import { isFilled, isAdornedStart } from '../InputBase/utils';
import { capitalize } from '../../utils/helpers';
import FormControlContext from './FormControlContext';

export const styles = {
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top',
  },
  marginNormal: {
    marginTop: 16,
    marginBottom: 8,
  },
  marginDense: {
    marginTop: 8,
    marginBottom: 4,
  },
  fullWidth: {
    width: '100%',
  },
};

const FormControl = props => {
  const {
    children,
    className,
    component: Component = 'div',
    disabled = false,
    error = false,
    fullWidth = false,
    hiddenLabel = false,
    margin = 'none',
    required = false,
    variant = 'standard',
    ...other
  } = props;

  const classes = useClasses(styles);

  const [adornedStart] = React.useState(() => {
    let initialAdornedStart = false;

    if (children) {
      React.Children.forEach(children, child => {
        if (!child) {
          return;
        }
        const input = child.props.input;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });

  const [filled, setFilled] = React.useState(() => {
    let initialFilled = false;

    if (children) {
      React.Children.forEach(children, child => {
        if (!child) {
          return;
        }
        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  });

  const [focused, setFocused] = React.useState(false);

  if (disabled && focused) {
    setFocused(false);
  }

  const childContext = {
    variant,
    disabled,
    error,
    filled,
    focused,
    required,
    hiddenLabel,
    adornedStart,
    margin,
    onBlur: () => {
      setFocused(false);
    },
    onEmpty: () => {
      if (filled) {
        setFilled(false);
      }
    },
    onFilled: () => {
      if (!filled) {
        setFilled(true);
      }
    },
    onFocus: () => {
      setFocused(true);
    },
  };

  return (
    <FormControlContext.Provider value={childContext}>
      <Component
        className={cx(
          classes.root,
          {
            [classes[`margin${capitalize(margin)}`]]: margin !== 'none',
            [classes.fullWidth]: fullWidth,
          },
          className,
        )}
        {...other}
      >
        {children}
      </Component>
    </FormControlContext.Provider>
  );
};

FormControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hiddenLabel: PropTypes.bool,
  required: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default FormControl;
