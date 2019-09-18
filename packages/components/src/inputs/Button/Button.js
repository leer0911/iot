import React from 'react';
import { cx } from 'emotion';
import propTypes from './propTypes';
import ButtonBase from '../ButtonBase';
import { useClasses } from '../../styles';
import { fade } from '../../theme/colorManipulator';
import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    minWidth: 64,
    boxSizing: 'border-box',
    padding: '10px 16px',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
  },
  disabled: {
    color: theme.palette.action.disabled,
  },
  label: {
    width: '100%',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  text: {
    padding: '6px 8px',
  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
  textSecondary: {
    color: theme.palette.secondary.main,
  },
  outlined: {
    padding: '5px 16px',
    border: `1px solid ${
      theme.palette.type === 'light'
        ? 'rgba(0, 0, 0, 0.23)'
        : 'rgba(255, 255, 255, 0.23)'
    }`,
  },
  outlinedDisabled: {
    border: `1px solid ${theme.palette.action.disabled}`,
  },
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
  },
  outlinedSecondary: {
    color: theme.palette.secondary.main,
    border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
  },
  outlinedSecondaryDisabled: {
    border: `1px solid ${theme.palette.action.disabled}`,
  },
  contained: {
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    boxShadow: theme.shadows[2],
    // '&:active': {
    //   boxShadow: theme.shadows[8],
    // },
  },
  containedDisabled: {
    color: theme.palette.action.disabled,
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.action.disabledBackground,
  },
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  containedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  colorInherit: {
    color: 'inherit',
    borderColor: 'currentColor',
  },
  sizeSmall: {
    padding: '6px 8px',
  },
  sizeLarge: {
    padding: '14px 24px',
  },
  fullWidth: {
    width: '100%',
  },
});

const Button = props => {
  const {
    className: classNameProp,
    children,
    color = 'default',
    size = 'medium',
    type = 'button',
    variant = 'text',
    disabled = false,
    fullWidth = false,
    ...rest
  } = props;

  const classes = useClasses(styles);

  const text = variant === 'text';
  const outlined = variant === 'outlined';
  const contained = variant === 'contained';
  const primary = color === 'primary';
  const secondary = color === 'secondary';

  const className = cx(
    classes.root,
    {
      [classes.text]: text,
      [classes.textPrimary]: text && primary,
      [classes.textSecondary]: text && secondary,
      [classes.outlined]: outlined,
      [classes.outlinedPrimary]: outlined && primary,
      [classes.outlinedSecondary]: outlined && secondary,
      [classes.contained]: contained,
      [classes.containedPrimary]: contained && primary,
      [classes.containedSecondary]: contained && secondary,
      [classes[`size${capitalize(size)}`]]: size !== 'medium',
      [classes.fullWidth]: fullWidth,
      [classes.colorInherit]: color === 'inherit',
      [classes.disabled]: disabled,
      [classes.outlinedDisabled]: outlined && disabled,
      [classes.containedDisabled]: contained && disabled,
    },
    classNameProp,
  );

  return (
    <ButtonBase className={className} disabled={disabled} type={type} {...rest}>
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
};

Button.propTypes = propTypes;

export default Button;
