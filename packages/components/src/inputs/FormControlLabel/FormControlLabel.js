import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import { useFormControl } from '../FormControl';
import Typography from '../../display/Typography';
import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    verticalAlign: 'middle',
    WebkitTapHighlightColor: 'transparent',
    marginLeft: -11,
    marginRight: 16,
  },
  labelPlacementStart: {
    flexDirection: 'row-reverse',
    marginLeft: 16,
    marginRight: -11,
  },
  labelPlacementTop: {
    flexDirection: 'column-reverse',
    marginLeft: 16,
  },
  labelPlacementBottom: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  disabled: {
    color: theme.palette.text.disabled,
  },
});

const FormControlLabel = props => {
  const {
    control,
    className: classNameProp,
    disabled: disabledProp,
    checked,
    inputRef,
    label,
    labelPlacement = 'end',
    name,
    onChange,
    value,
    ...other
  } = props;

  const classes = useClasses(styles);
  const formControl = useFormControl();

  let disabled = disabledProp;
  if (
    typeof disabled === 'undefined' &&
    typeof control.props.disabled !== 'undefined'
  ) {
    disabled = control.props.disabled;
  }
  if (typeof disabled === 'undefined' && formControl) {
    disabled = formControl.disabled;
  }

  const controlProps = {
    disabled,
  };

  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(key => {
    if (
      typeof control.props[key] === 'undefined' &&
      typeof props[key] !== 'undefined'
    ) {
      controlProps[key] = props[key];
    }
  });

  return (
    <label
      className={cx(
        classes.root,
        {
          [classes[`labelPlacement${capitalize(labelPlacement)}`]]:
            labelPlacement !== 'end',
        },
        classNameProp,
      )}
      {...other}
    >
      {React.cloneElement(control, controlProps)}
      <Typography
        component="span"
        className={cx(classes.label, { [classes.disabled]: disabled })}
      >
        {label}
      </Typography>
    </label>
  );
};

FormControlLabel.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  control: PropTypes.element,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
};

export default FormControlLabel;
