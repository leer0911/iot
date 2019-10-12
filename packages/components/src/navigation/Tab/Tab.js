import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import ButtonBase from '../../inputs/ButtonBase';
import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    ...theme.typography.button,
    maxWidth: 264,
    minWidth: 72,
    position: 'relative',
    boxSizing: 'border-box',
    minHeight: 48,
    flexShrink: 0,
    padding: '6px 12px',
    overflow: 'hidden',
    whiteSpace: 'normal',
    textAlign: 'center',
  },
  labelIcon: {
    minHeight: 72,
    paddingTop: 9,
  },
  textColorInherit: {
    color: 'inherit',
    opacity: 0.7,
  },
  textColorInheritSelected: {
    opacity: 1,
  },
  textColorInheritDisabled: {
    opacity: 0.4,
  },
  textColorPrimary: {
    color: theme.palette.text.secondary,
  },
  textColorPrimarySelected: {
    color: theme.palette.primary.main,
  },
  textColorSecondary: {
    color: theme.palette.text.secondary,
  },
  textColorSecondarySelected: {
    color: theme.palette.secondary.main,
  },
  disabled: {
    color: theme.palette.text.disabled,
  },
  fullWidth: {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none',
  },
  wrapped: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.5,
  },
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },
});

const Tab = props => {
  const {
    className,
    disabled = false,
    fullWidth,
    icon,
    indicator,
    label,
    onChange,
    onClick,
    selected,
    textColor = 'inherit',
    value,
    wrapped = false,
    ...other
  } = props;

  const classes = useClasses(styles);

  const handleChange = event => {
    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonBase
      className={cx(
        classes.root,
        classes[`textColor${capitalize(textColor)}`],
        {
          [classes.disabled]: disabled,
          [classes.selected]: selected,
          [classes.labelIcon]: label && icon,
          [classes.fullWidth]: fullWidth,
          [classes.wrapped]: wrapped,
          [classes.textColorPrimarySelected]:
            selected && textColor === 'primary',
          [classes.textColorSecondarySelected]:
            selected && textColor === 'secondary',
          [classes.textColorInheritSelected]:
            selected && textColor === 'inherit',
          [classes.textColorInheritDisabled]:
            disabled && textColor === 'inherit',
        },
        className,
      )}
      disabled={disabled}
      onClick={handleChange}
      {...other}
    >
      <span className={classes.wrapper}>
        {icon}
        {label}
      </span>
      {indicator}
    </ButtonBase>
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  indicator: PropTypes.node,
  label: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
  value: PropTypes.any,
  wrapped: PropTypes.bool,
};

export default Tab;
