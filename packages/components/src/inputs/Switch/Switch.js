// @inheritedComponent IconButton

import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import { capitalize } from '../../utils/helpers';
import SwitchBase from '../SwitchBase';

export const styles = theme => ({
  root: {
    display: 'inline-flex',
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: 'hidden',
    padding: 12,
    boxSizing: 'border-box',
    position: 'relative',
    flexShrink: 0,
    zIndex: 0,
    verticalAlign: 'middle',
  },
  edgeStart: {
    marginLeft: -8,
  },
  edgeEnd: {
    marginRight: -8,
  },
  colorPrimaryChecked: {
    color: theme.palette.primary.main,
  },
  colorSecondaryChecked: {
    color: theme.palette.secondary.main,
  },
  thumb: {
    boxShadow: theme.shadows[1],
    backgroundColor: 'currentColor',
    width: 20,
    height: 20,
    borderRadius: '50%',
  },
  track: {
    height: '100%',
    width: '100%',
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: theme.transitions.create(['opacity', 'background-color'], {
      duration: theme.transitions.duration.shortest,
    }),
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.common.black
        : theme.palette.common.white,
    opacity: theme.palette.type === 'light' ? 0.38 : 0.3,
  },
  trackChecked: {
    opacity: 0.5,
  },
  trackDisabled: {
    opacity: theme.palette.type === 'light' ? 0.12 : 0.1,
  },
  trackColorSecondaryChecked: {
    backgroundColor: theme.palette.secondary.main,
  },
  trackColorPrimaryChecked: {
    backgroundColor: theme.palette.primary.main,
  },
});

export const switchBaseStyles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    color:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[400],
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  input: {
    left: '-100%',
    width: '300%',
  },
  checked: {
    transform: 'translateX(50%)',
  },
  disabled: {
    color:
      theme.palette.type === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[800],
  },
});

const Switch = props => {
  const {
    className,
    color = 'secondary',
    edge = false,
    disabled,
    checked,
    ...other
  } = props;

  const classes = useClasses(styles);

  const icon = <span className={classes.thumb} />;

  return (
    <span
      className={cx(
        classes.root,
        {
          [classes.edgeStart]: edge === 'start',
          [classes.edgeEnd]: edge === 'end',
        },
        className,
      )}
    >
      <SwitchBase
        type="checkbox"
        icon={icon}
        checkedIcon={icon}
        classes={switchBaseStyles}
        className={cx({
          [classes[`color${capitalize(color)}Checked`]]: checked,
        })}
        disabled={disabled}
        checked={checked}
        {...other}
      />
      <span
        className={cx(classes.track, {
          [classes.trackChecked]: checked,
          [classes.trackDisabled]: disabled,
          [classes.trackColorSecondaryChecked]:
            checked && color === 'secondary',
          [classes.trackColorPrimaryChecked]: checked && color === 'primary',
        })}
      />
    </span>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  edge: PropTypes.oneOf(['start', 'end', false]),
  icon: PropTypes.node,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.any,
};

export default Switch;
