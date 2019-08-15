export const easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};

export const formatMs = milliseconds => `${Math.round(milliseconds)}ms`;
export const isString = value => typeof value === 'string';
export const isNumber = value => !isNaN(parseFloat(value));

const create = (props = ['all'], options = {}) => {
  const {
    duration: durationOption = duration.standard,
    easing: easingOption = easing.easeInOut,
    delay = 0
  } = options;

  return (Array.isArray(props) ? props : [props])
    .map(
      animatedProp =>
        `${animatedProp} ${
          typeof durationOption === 'string'
            ? durationOption
            : formatMs(durationOption)
        } ${easingOption} ${
          typeof delay === 'string' ? delay : formatMs(delay)
        }`
    )
    .join(',');
};

const getAutoHeightDuration = height => {
  if (!height) {
    return 0;
  }

  const constant = height / 36;

  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
};

export default {
  easing,
  duration,
  create,
  getAutoHeightDuration
};
