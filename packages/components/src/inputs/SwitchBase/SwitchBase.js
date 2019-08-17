import React from 'react';
import PropTypes from 'prop-types';

import { useClasses } from '../../styles';
import { cx } from 'emotion';

import IconButton from '../IconButton';

export const styles = {
  root: {
    padding: 9,
  },
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
  },
};

const SwitchBase = props => {
  const {
    className: classNameProp,
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    icon,
    id,
    inputProps,
    name,
    readOnly,
    required,
    tabIndex,
    type,
    value,
    onBlur,
    onChange,
    onFocus,
    disabled,
    ...rest
  } = props;

  const classes = useClasses(styles);

  const { current: isControlled } = React.useRef(checkedProp != null);
  const [checkedState, setCheckedState] = React.useState(
    Boolean(defaultChecked),
  );

  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleInputChange = event => {
    const checked = event.target.checked;

    if (!isControlled) {
      setCheckedState(checked);
    }

    if (onChange) {
      onChange(event, checked);
    }
  };

  const checked = isControlled ? checkedProp : checkedState;
  const hasLabelFor = type === 'checkbox' || type === 'radio';

  return (
    <IconButton
      component="span"
      className={cx(
        classes.root,
        {
          [classes.checked]: checked,
          [classes.disabled]: disabled,
        },
        classNameProp,
      )}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    >
      {checked ? checkedIcon : icon}
      <input
        autoFocus={autoFocus}
        checked={checkedProp}
        defaultChecked={defaultChecked}
        className={classes.input}
        disabled={disabled}
        id={hasLabelFor && id}
        name={name}
        onChange={handleInputChange}
        readOnly={readOnly}
        required={required}
        tabIndex={tabIndex}
        type={type}
        value={value}
        {...inputProps}
      />
    </IconButton>
  );
};

SwitchBase.propTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  muiFormControl: PropTypes.object,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
};

export default SwitchBase;
