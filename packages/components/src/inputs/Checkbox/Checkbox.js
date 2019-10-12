import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import SwitchBase from '../SwitchBase';
import CheckBoxIcon from '../../icon/CheckBox';
import CheckBoxOutlineBlankIcon from '../../icon/CheckBoxOutlineBlank';
import IndeterminateCheckBoxIcon from '../../icon/IndeterminateCheckBox';

export const styles = theme => ({
  root: {
    color: theme.palette.text.secondary,
  },
  colorPrimaryChecked: {
    color: theme.palette.primary.main,
  },
  colorPrimaryDisable: {
    color: theme.palette.action.disabled,
  },
  colorSecondaryChecked: {
    color: theme.palette.secondary.main,
  },
  disabled: {
    color: theme.palette.action.disabled,
  },
});

const defaultCheckedIcon = <CheckBoxIcon />;
const defaultIcon = <CheckBoxOutlineBlankIcon />;
const defaultIndeterminateIcon = <IndeterminateCheckBoxIcon />;

const Checkbox = props => {
  const {
    checked,
    disabled,
    indeterminate = false,
    icon = defaultIcon,
    checkedIcon = defaultCheckedIcon,
    indeterminateIcon = defaultIndeterminateIcon,
    color = 'secondary',
    ...other
  } = props;

  const classes = useClasses(styles);

  return (
    <SwitchBase
      type="checkbox"
      icon={indeterminate ? indeterminateIcon : icon}
      checkedIcon={indeterminate ? indeterminateIcon : checkedIcon}
      className={cx(classes.root, {
        [classes.colorPrimaryChecked]: checked && color === 'primary',
        [classes.colorSecondaryChecked]: checked && color === 'secondary',
        [classes.disabled]: disabled,
      })}
      color={color}
      checked={checked}
      disabled={disabled}
      {...other}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  icon: PropTypes.node,
  indeterminate: PropTypes.bool,
  indeterminateIcon: PropTypes.node,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default Checkbox;
