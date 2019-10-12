import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import CancelIcon from '../../icon/Cancel';
import { emphasize, fade } from '../../theme/colorManipulator';
import { capitalize } from '../../utils/helpers';

export const styles = theme => {
  const height = 32;
  const backgroundColor =
    theme.palette.type === 'light'
      ? theme.palette.grey[300]
      : theme.palette.grey[700];
  const deleteIconColor = fade(theme.palette.text.primary, 0.26);

  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      cursor: 'default',
      outline: 'none',
      textDecoration: 'none',
      border: 'none', // Remove `button` border
      padding: 0, // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    clickable: {
      WebkitTapHighlightColor: 'transparent', // Remove grey highlight
      cursor: 'pointer',
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    },
    clickableColorPrimary: {
      '&:active': {
        backgroundColor: emphasize(theme.palette.primary.main, 0.12),
      },
    },
    clickableColorSecondary: {
      '&:active': {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.12),
      },
    },
    deletable: {
      '&:focus': {
        backgroundColor: emphasize(backgroundColor, 0.08),
      },
    },
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: emphasize(theme.palette.primary.main, 0.2),
      },
    },
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.2),
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      border: `1px solid ${
        theme.palette.type === 'light'
          ? 'rgba(0, 0, 0, 0.23)'
          : 'rgba(255, 255, 255, 0.23)'
      }`,
    },
    outlinedClickable: {
      '&:focus': {
        backgroundColor: fade(
          theme.palette.text.primary,
          theme.palette.action.hoverOpacity,
        ),
      },
    },
    outlinedAvatar: {
      marginLeft: -1,
    },
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    outlinedPrimaryClickable: {
      '&:focus': {
        backgroundColor: fade(
          theme.palette.primary.main,
          theme.palette.action.hoverOpacity,
        ),
      },
    },
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    outlinedSecondaryClickable: {
      '&:focus': {
        backgroundColor: fade(
          theme.palette.secondary.main,
          theme.palette.action.hoverOpacity,
        ),
      },
    },
    avatar: {
      marginRight: -4,
      width: height,
      height,
      color:
        theme.palette.type === 'light'
          ? theme.palette.grey[700]
          : theme.palette.grey[300],
      fontSize: theme.typography.pxToRem(16),
    },
    avatarColorPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.dark,
    },
    avatarColorSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.dark,
    },
    avatarChildren: {
      width: 19,
      height: 19,
    },
    icon: {
      color:
        theme.palette.type === 'light'
          ? theme.palette.grey[700]
          : theme.palette.grey[300],
      marginLeft: 4,
      marginRight: -8,
    },
    iconColorPrimary: {
      color: 'inherit',
    },
    iconColorSecondary: {
      color: 'inherit',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit',
    },
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px',
    },
    deleteIconColorPrimary: {
      color: fade(theme.palette.primary.contrastText, 0.7),
      '&:active': {
        color: theme.palette.primary.contrastText,
      },
    },
    deleteIconColorSecondary: {
      color: fade(theme.palette.secondary.contrastText, 0.7),
      '&:active': {
        color: theme.palette.secondary.contrastText,
      },
    },
    deleteIconOutlinedColorPrimary: {
      color: fade(theme.palette.primary.main, 0.7),
      '&:active': {
        color: theme.palette.primary.main,
      },
    },
    deleteIconOutlinedColorSecondary: {
      color: fade(theme.palette.secondary.main, 0.7),
      '&:active': {
        color: theme.palette.secondary.main,
      },
    },
  };
};

const Chip = props => {
  const {
    variant = 'default',
    color = 'default',
    component: Component = 'div',
    className: classNameProp,
    avatar: avatarProp,
    clickable: clickableProp,
    deleteIcon: deleteIconProp,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    ...other
  } = props;

  const classes = useClasses(styles);

  const handleDeleteIconClick = event => {
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };

  const clickable = clickableProp !== false && onClick ? true : clickableProp;

  const className = cx(
    classes.root,
    {
      [classes[`color${capitalize(color)}`]]: color !== 'default',
      [classes.clickable]: clickable,
      [classes[`clickableColor${capitalize(color)}`]]:
        clickable && color !== 'default',
      [classes.deletable]: onDelete,
      [classes[`deletableColor${capitalize(color)}`]]:
        onDelete && color !== 'default',
      [classes.outlined]: variant === 'outlined',
      [classes.outlinedClickable]: variant === 'outlined' && clickable,
      [classes.outlinedAvatar]:
        variant === 'outlined' &&
        avatarProp &&
        React.isValidElement(avatarProp),
      [classes.outlinedPrimary]: variant === 'outlined' && color === 'primary',
      [classes.outlinedPrimaryClickable]:
        variant === 'outlined' && color === 'primary' && clickable,
      [classes.outlinedSecondary]:
        variant === 'outlined' && color === 'secondary',
      [classes.outlinedSecondaryClickable]:
        variant === 'outlined' && color === 'secondary' && clickable,
    },
    classNameProp,
  );

  let deleteIcon = null;
  if (onDelete) {
    const customClasses = cx({
      [classes[`deleteIconColor${capitalize(color)}`]]:
        color !== 'default' && variant !== 'outlined',
      [classes[`deleteIconOutlinedColor${capitalize(color)}`]]:
        color !== 'default' && variant === 'outlined',
    });

    deleteIcon =
      deleteIconProp && React.isValidElement(deleteIconProp) ? (
        React.cloneElement(deleteIconProp, {
          className: cx(
            deleteIconProp.props.className,
            classes.deleteIcon,
            customClasses,
          ),
          onClick: handleDeleteIconClick,
        })
      ) : (
        <CancelIcon
          className={cx(classes.deleteIcon, customClasses)}
          onClick={handleDeleteIconClick}
        />
      );
  }

  let avatar = null;
  if (avatarProp && React.isValidElement(avatarProp)) {
    avatar = React.cloneElement(avatarProp, {
      className: cx(classes.avatar, avatarProp.props.className, {
        [classes[`avatarColor${capitalize(color)}`]]: color !== 'default',
      }),
      childrenClassName: cx(
        classes.avatarChildren,
        avatarProp.props.childrenClassName,
      ),
    });
  }

  let icon = null;
  if (iconProp && React.isValidElement(iconProp)) {
    icon = React.cloneElement(iconProp, {
      className: cx(classes.icon, iconProp.props.className, {
        [classes[`iconColor${capitalize(color)}`]]: color !== 'default',
      }),
    });
  }

  return (
    <Component className={className} onClick={onClick} {...other}>
      {avatar || icon}
      <span className={classes.label}>{label}</span>
      {deleteIcon}
    </Component>
  );
};

Chip.propTypes = {
  avatar: PropTypes.element,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  component: PropTypes.elementType,
  deleteIcon: PropTypes.element,
  icon: PropTypes.element,
  label: PropTypes.node,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'outlined']),
};

export default Chip;
