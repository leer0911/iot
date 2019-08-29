export const asc = (a, b) => {
  return a - b;
};

export const clamp = (value, min, max) => {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};

export const findClosest = (values, currentValue) => {
  const { index: closestIndex } = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index,
      };
    }

    return acc;
  }, null);
  return closestIndex;
};

export const trackFinger = (event, touchId) => {
  if (touchId.current !== undefined && event.changedTouches) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.pageX,
          y: touch.pageY,
        };
      }
    }
    return false;
  }

  return {
    x: event.pageX,
    y: event.pageY,
  };
};

export const valueToPercent = (value, min, max) => {
  return ((value - min) * 100) / (max - min);
};

export const percentToValue = (percent, min, max) => {
  return (max - min) * percent + min;
};

export const getDecimalPrecision = num => {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (
      (matissaDecimalPart ? matissaDecimalPart.length : 0) +
      parseInt(parts[1], 10)
    );
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

export const roundValueToStep = (value, step) => {
  const nearest = Math.round(value / step) * step;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
};

export const setValueIndex = ({ values, source, newValue, index }) => {
  if (values[index] === newValue) {
    return source;
  }

  const output = [...values];
  output[index] = newValue;
  return output;
};

export const Identity = x => x;
