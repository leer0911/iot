import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';
import RadioGroupContext from './RadioGroupContext';

const RadioGroup = props => {
  const {
    actions,
    children,
    name,
    value: valueProp,
    onChange,
    ...other
  } = props;
  const rootRef = React.useRef(null);
  const { current: isControlled } = React.useRef(valueProp != null);
  const [valueState, setValue] = React.useState(() => {
    if (!isControlled) {
      return props.defaultValue;
    }
    return null;
  });

  React.useImperativeHandle(
    actions,
    () => ({
      focus: () => {
        let input = rootRef.current.querySelector(
          'input:not(:disabled):checked',
        );

        if (!input) {
          input = rootRef.current.querySelector('input:not(:disabled)');
        }

        if (input) {
          input.focus();
        }
      },
    }),
    [],
  );

  const value = isControlled ? valueProp : valueState;

  const handleChange = event => {
    if (!isControlled) {
      setValue(event.target.value);
    }

    if (onChange) {
      onChange(event, event.target.value);
    }
  };
  const context = { name, onChange: handleChange, value };

  return (
    <FormGroup role="radiogroup" {...other}>
      <RadioGroupContext.Provider value={context}>
        {children}
      </RadioGroupContext.Provider>
    </FormGroup>
  );
};

RadioGroup.propTypes = {
  actions: PropTypes.shape({ current: PropTypes.object }),
  children: PropTypes.node,
  defaultValue: PropTypes.any,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
};

export default RadioGroup;
