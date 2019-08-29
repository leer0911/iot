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
    classes: classesProp,
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    icon,
    inputProps,
    id,
    name,
    readOnly,
    required,
    type,
    value,
    onChange,
    disabled,
    ...rest
  } = props;

  const classes = useClasses(styles, { classes: classesProp });

  const { current: isControlled } = React.useRef(checkedProp != null);
  const [checkedState, setCheckedState] = React.useState(
    Boolean(defaultChecked),
  );

  const handleInputChange = event => {
    const checked = event.target.checked;
    if(disabled){
      return
    }

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
      {...rest}
    >
      {checked ? checkedIcon : icon}
      <input
        className={classes.input}
        checked={checkedProp}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={hasLabelFor && id}
        name={name}
        onChange={handleInputChange}
        readOnly={readOnly}
        required={required}
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
  defaultChecked: PropTypes.bool,
  checkedIcon: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default SwitchBase;
