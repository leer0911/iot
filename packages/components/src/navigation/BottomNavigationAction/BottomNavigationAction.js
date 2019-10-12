import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles/';
import ButtonBase from '../../inputs/ButtonBase';

export const styles = theme => ({
  root: {
    transition: theme.transitions.create(['color', 'padding-top'], {
      duration: theme.transitions.duration.short,
    }),
    padding: '6px 12px 8px',
    minWidth: 80,
    maxWidth: 168,
    color: theme.palette.text.secondary,
    flex: '1',
  },
  selected: {
    paddingTop: 6,
    color: theme.palette.primary.main,
  },
  iconOnly: {
    paddingTop: 16,
  },
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    opacity: 1,
    transition: 'font-size 0.2s, opacity 0.2s',
    transitionDelay: '0.1s',
  },
  labelIconOnly: {
    opacity: 0,
    transitionDelay: '0s',
  },
  labelSelected: {
    fontSize: theme.typography.pxToRem(14),
  },
});

const BottomNavigationAction = props => {
  const {
    icon,
    label,
    onChange,
    onClick,
    selected,
    showLabel,
    value,
    ...rest
  } = props;

  const handleChange = event => {
    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const classes = useClasses(styles);

  return (
    <ButtonBase
      className={cx(classes.root, {
        [classes.selected]: selected,
        [classes.iconOnly]: !showLabel && !selected,
      })}
      onClick={handleChange}
      {...rest}
    >
      <span className={classes.wrapper}>
        {icon}
        <span
          className={cx(classes.label, {
            [classes.labelSelected]: selected,
            [classes.labelIconOnly]: !showLabel && !selected,
          })}
        >
          {label}
        </span>
      </span>
    </ButtonBase>
  );
};

BottomNavigationAction.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  showLabel: PropTypes.bool,
  value: PropTypes.any,
};

export default BottomNavigationAction;
