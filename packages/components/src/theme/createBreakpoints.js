export const keys = ['xs', 'sm', 'md', 'lg', 'xl'];

export default function createBreakpoints(breakpoints) {
  const {
    values = {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    },
    unit = 'px',
    step = 5,
    ...rest
  } = breakpoints;

  const up = key => {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  };

  const down = key => {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      return up('xs');
    }

    const value =
      typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;

    return `@media (max-width:${value - step / 100}${unit})`;
  };

  const between = (start, end) => {
    const endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return (
      `@media (min-width:${values[start]}${unit}) and ` +
      `(max-width:${values[keys[endIndex]] - step / 100}${unit})`
    );
  };

  const only = key => {
    return between(key, key);
  };

  const width = key => {
    return values[key];
  };

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
    ...rest
  };
}
