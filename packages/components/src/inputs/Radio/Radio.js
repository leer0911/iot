import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import SwitchBase from '../SwitchBase';
import RadioButtonIcon from './RadioButtonIcon';

import { createChainedFunction } from '../../utils/helpers';

import RadioGroupContext from '../RadioGroup/RadioGroupContext';

export const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
  },
  colorPrimaryChecked: {
    color: theme.palette.primary.main,
  },
  colorSecondaryChecked: {
    color: theme.palette.secondary.main,
  },
  disabled: {
    color: theme.palette.action.disabled,
  },
});

const defaultCheckedIcon = <RadioButtonIcon checked />;
const defaultIcon = <RadioButtonIcon />;

const Radio = props => {
  const {
    checked: checkedProp,
    color = 'secondary',
    name: nameProp,
    onChange: onChangeProp,
    disabled,
    ...rest
  } = props;

  const classes = useClasses(styles);

  const radioGroup = React.useContext(RadioGroupContext);

  let checked = checkedProp;
  let name = nameProp;

  const onChange = createChainedFunction(
    onChangeProp,
    radioGroup && radioGroup.onChange,
  );

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = radioGroup.value === props.value;
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  return (
    <SwitchBase
      type="radio"
      color={color}
      icon={defaultIcon}
      checkedIcon={defaultCheckedIcon}
      className={cx(classes.root, {
        [classes.colorPrimaryChecked]: checked && color === 'primary',
        [classes.colorSecondaryChecked]: checked && color === 'secondary',
        [classes.disabled]: disabled,
      })}
      name={name}
      checked={checked}
      onChange={onChange}
      {...rest}
    />
  );
};

Radio.propTypes = {
  type: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
};

export default Radio;
