import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import { capitalize } from '../../utils/helpers';

const SIZE = 44;

const getRelativeValue = (value, min, max) => {
  const clampedValue = Math.min(Math.max(min, value), max);
  return (clampedValue - min) / (max - min);
};

const easeOut = t => {
  t = getRelativeValue(t, 0, 1);
  t = (t -= 1) * t * t + 1;
  return t;
};

const easeIn = t => {
  return t * t;
};

export const styles = theme => ({
  root: {
    display: 'inline-block',
    lineHeight: 1,
  },
  static: {
    transition: theme.transitions.create('transform'),
  },
  indeterminate: {
    animation: '1.4s linear infinite',
    animationName: 'progress-circular-rotate',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  svg: {},
  circle: {
    stroke: 'currentColor',
  },
  circleStatic: {
    transition: theme.transitions.create('stroke-dashoffset'),
  },
  circleIndeterminate: {
    animation: '1.4s ease-in-out infinite',
    animationName: 'progress-circular-dash',
    strokeDasharray: '80px, 200px',
    strokeDashoffset: '0px',
  },
  '@keyframes progress-circular-rotate': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  '@keyframes progress-circular-dash': {
    '0%': {
      strokeDasharray: '1px, 200px',
      strokeDashoffset: '0px',
    },
    '50%': {
      strokeDasharray: '100px, 200px',
      strokeDashoffset: '-15px',
    },
    '100%': {
      strokeDasharray: '100px, 200px',
      strokeDashoffset: '-125px',
    },
  },
  circleDisableShrink: {
    animation: 'none',
  },
});

const CircularProgress = props => {
  const {
    className,
    color = 'primary',
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = 'indeterminate',
    ...other
  } = props;

  const classes = useClasses(styles);

  const circleStyle = {};
  const rootStyle = {};

  if (variant === 'determinate' || variant === 'static') {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);

    if (variant === 'static') {
      circleStyle.strokeDashoffset = `${(
        ((100 - value) / 100) *
        circumference
      ).toFixed(3)}px`;
      rootStyle.transform = 'rotate(-90deg)';
    } else {
      circleStyle.strokeDashoffset = `${(
        easeIn((100 - value) / 100) * circumference
      ).toFixed(3)}px`;
      rootStyle.transform = `rotate(${(easeOut(value / 70) * 270).toFixed(
        3,
      )}deg)`;
    }
  }

  return (
    <div
      className={cx(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'inherit',
          [classes.indeterminate]: variant === 'indeterminate',
          [classes.static]: variant === 'static',
        },
        className,
      )}
      style={{ width: size, height: size, ...rootStyle, ...style }}
      {...other}
    >
      <svg
        className={classes.svg}
        viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
      >
        <circle
          className={cx(classes.circle, {
            [classes.circleIndeterminate]: variant === 'indeterminate',
            [classes.circleStatic]: variant === 'static',
            [classes.circleDisableShrink]: disableShrink,
          })}
          style={circleStyle}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - thickness) / 2}
          fill="none"
          strokeWidth={thickness}
        />
      </svg>
    </div>
  );
};

CircularProgress.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'static']),
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  disableShrink: PropTypes.bool,
  thickness: PropTypes.number,
  value: PropTypes.number,
};

export default CircularProgress;
