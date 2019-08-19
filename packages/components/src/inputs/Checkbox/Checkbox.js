import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

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
    checkedIcon = defaultCheckedIcon,
    color = 'secondary',
    icon = defaultIcon,
    indeterminate = false,
    indeterminateIcon = defaultIndeterminateIcon,
    inputProps,
    disabled,
    checked,
    ...other
  } = props;

  const classes = useClasses(styles);

  return (
    <SwitchBase
      type="checkbox"
      checkedIcon={indeterminate ? indeterminateIcon : checkedIcon}
      className={cx(classes.root, {
        [classes.colorPrimaryChecked]: checked && color === 'primary',
        [classes.colorSecondaryChecked]: checked && color === 'secondary',
        [classes.disabled]: disabled,
      })}
      color={color}
      inputProps={{
        'data-indeterminate': indeterminate,
        ...inputProps,
      }}
      icon={indeterminate ? indeterminateIcon : icon}
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
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  indeterminateIcon: PropTypes.node,
  inputProps: PropTypes.object,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.any,
};

export default Checkbox;
