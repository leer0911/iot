import React, { useRef, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import { fade } from '../../theme/colorManipulator';
import { useEventCallback } from '../../utils';

import ValueLabel from './ValueLabel';
import {
  asc,
  clamp,
  Identity,
  findClosest,
  percentToValue,
  valueToPercent,
  trackFinger,
  setValueIndex,
  roundValueToStep,
} from './utils';

const axisProps = {
  horizontal: {
    offset: percent => ({ left: `${percent}%` }),
    leap: percent => ({ width: `${percent}%` }),
  },
  vertical: {
    offset: percent => ({ bottom: `${percent}%` }),
    leap: percent => ({ height: `${percent}%` }),
  },
};

export const styles = theme => ({
  root: {
    height: 2,
    width: '100%',
    boxSizing: 'content-box',
    padding: '11px 0',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    touchAction: 'none',
    color: theme.palette.primary.main,
    WebkitTapHighlightColor: 'transparent',
  },
  vertical: {
    width: 2,
    height: '100%',
    padding: '0 11px',
  },
  disabled: {
    cursor: 'default',
    color: theme.palette.grey[400],
  },
  rail: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: 2,
    borderRadius: 1,
    backgroundColor: 'currentColor',
    opacity: 0.38,
  },
  railVertical: {
    height: '100%',
    width: 2,
  },
  track: {
    display: 'block',
    position: 'absolute',
    height: 2,
    borderRadius: 1,
    backgroundColor: 'currentColor',
  },
  trackVertical: {
    width: 2,
  },
  thumb: {
    position: 'absolute',
    width: 12,
    height: 12,
    marginLeft: -6,
    marginTop: -5,
    boxSizing: 'border-box',
    borderRadius: '50%',
    outline: 0,
    backgroundColor: 'currentColor',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.create(['box-shadow'], {
      duration: theme.transitions.duration.shortest,
    }),
    '&$active': {
      boxShadow: `0px 0px 0px 14px ${fade(theme.palette.primary.main, 0.16)}`,
    },
  },
  thumbDisabled: {
    pointerEvents: 'none',
    width: 8,
    height: 8,
    marginLeft: -4,
    marginTop: -3,
  },
  thumbVertical: {
    marginLeft: -5,
    marginBottom: -6,
  },
  thumbVerticalDisable: {
    marginLeft: -3,
    marginBottom: -4,
  },
});

const Slider = props => {
  const {
    className,
    component: Component = 'span',
    ThumbComponent = 'span',
    orientation = 'horizontal',
    name,
    disabled = false,
    defaultValue,
    value: valueProp,
    valueLabelDisplay = 'off',
    ValueLabelComponent = ValueLabel,
    valueLabelFormat = Identity,
    max = 100,
    min = 0,
    step = 1,
    onChange,
    onChangeCommitted,
    ...other
  } = props;

  const classes = useClasses(styles);

  const touchId = useRef();
  const { current: isControlled } = useRef(valueProp != null);
  const sliderRef = useRef();
  const previousIndex = useRef();

  const [valueState, setValueState] = useState(defaultValue);
  const valueDerived = isControlled ? valueProp : valueState;
  const range = Array.isArray(valueDerived);
  let values = range ? [...valueDerived].sort(asc) : [valueDerived];
  values = values.map(value => clamp(value, min, max));

  const getFingerNewValue = useCallback(
    ({ finger, move = false, values: values2, source }) => {
      const { current: slider } = sliderRef;
      const { width, height, bottom, left } = slider.getBoundingClientRect();

      let percent;

      if (orientation === 'vertical') {
        percent = (bottom + window.pageYOffset - finger.y) / height;
      } else {
        percent = (finger.x - left - window.pageXOffset) / width;
      }

      let newValue;

      newValue = percentToValue(percent, min, max);

      if (step) {
        newValue = roundValueToStep(newValue, step);
      }

      newValue = clamp(newValue, min, max);
      let activeIndex = 0;

      if (range) {
        if (!move) {
          activeIndex = findClosest(values2, newValue);
        } else {
          activeIndex = previousIndex.current;
        }

        const previousValue = newValue;
        newValue = setValueIndex({
          values: values2,
          source,
          newValue,
          index: activeIndex,
        }).sort(asc);
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }

      return { newValue, activeIndex };
    },
    [orientation, min, max, step, range],
  );

  const handleTouchStart = useEventCallback(event => {
    event.preventDefault();
    const touch = event.changedTouches[0];

    if (touch != null) {
      touchId.current = touch.identifier;
    }

    const finger = trackFinger(event, touchId);

    const { newValue } = getFingerNewValue({
      finger,
      values,
      source: valueDerived,
    });

    if (!isControlled) {
      setValueState(newValue);
    }

    if (onChange) {
      onChange(event, newValue);
    }

    document.body.addEventListener('touchmove', handleTouchMove);
    document.body.addEventListener('touchend', handleTouchEnd);
  });

  const handleTouchMove = useEventCallback(event => {
    const finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    const { newValue } = getFingerNewValue({
      finger,
      move: true,
      values,
      source: valueDerived,
    });

    if (!isControlled) {
      setValueState(newValue);
    }

    if (onChange) {
      onChange(event, newValue);
    }
  });

  const handleTouchEnd = useEventCallback(event => {
    const finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    const { newValue } = getFingerNewValue({
      finger,
      values,
      source: valueDerived,
    });

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }

    touchId.current = undefined;
    document.body.removeEventListener('touchmove', handleTouchMove);
    document.body.removeEventListener('touchend', handleTouchEnd);
  });

  useEffect(() => {
    if (disabled) {
      return () => {};
    }

    const { current: slider } = sliderRef;
    slider.addEventListener('touchstart', handleTouchStart);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      document.body.removeEventListener('touchmove', handleTouchMove);
      document.body.removeEventListener('touchend', handleTouchEnd);
    };
  }, [disabled, handleTouchEnd, handleTouchMove, handleTouchStart]);

  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap =
    valueToPercent(values[values.length - 1], min, max) - trackOffset;

  const trackStyle = {
    ...axisProps[orientation].offset(trackOffset),
    ...axisProps[orientation].leap(trackLeap),
  };

  return (
    <Component
      className={cx(
        classes.root,
        {
          [classes.disabled]: disabled,
          [classes.vertical]: orientation === 'vertical',
        },
        className,
      )}
      ref={sliderRef}
      {...other}
    >
      <span
        className={cx(classes.rail, {
          [classes.railVertical]: orientation === 'vertical',
        })}
      />
      <span
        className={cx(classes.track, {
          [classes.trackVertical]: orientation === 'vertical',
        })}
        style={trackStyle}
      />
      <input value={values.join(',')} name={name} type="hidden" />
      {values.map((value, index) => {
        const percent = valueToPercent(value, min, max);
        const style = axisProps[orientation].offset(percent);
        return (
          <ValueLabelComponent
            valueLabelFormat={valueLabelFormat}
            valueLabelDisplay={valueLabelDisplay}
            value={value}
            key={index}
            index={index}
            disabled={disabled}
          >
            <ThumbComponent
              className={cx(classes.thumb, {
                [classes.thumbDisabled]: disabled,
                [classes.thumbVertical]: orientation === 'vertical',
                [classes.thumbVerticalDisabled]:
                  orientation === 'vertical' && disabled,
              })}
              style={style}
            />
          </ValueLabelComponent>
        );
      })}
    </Component>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onChangeCommitted: PropTypes.func,
  step: PropTypes.number,
  ThumbComponent: PropTypes.elementType,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  ValueLabelComponent: PropTypes.elementType,
  valueLabelDisplay: PropTypes.oneOf(['on', 'auto', 'off']),
  valueLabelFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default Slider;
