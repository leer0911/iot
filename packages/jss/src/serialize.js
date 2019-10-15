import hashString from './hash';
import unitless from './unitless';
import { memoize } from './utils';

const hyphenateRegex = /[A-Z]|^ms/g;
const animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
const labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
const sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;

const isCustomProperty = property => property.charCodeAt(1) === 45;

let cursor;

const handleStyleName = memoize(styleName =>
  isCustomProperty(styleName)
    ? styleName
    : styleName.replace(hyphenateRegex, '-$&').toLowerCase(),
);

const handleStyleValue = (key, value) => {
  const isInvalidValue = value == null || typeof value === 'boolean';
  const isAnimationKey = key === 'animation' || key === 'animationName';
  const isUnitless = !isCustomProperty(key) && unitless[key] !== 1;
  const shouldAddUnit = isUnitless && typeof value === 'number' && value !== 0;

  if (isInvalidValue) {
    return '';
  }

  if (isAnimationKey) {
    const handleString = value.replace(animationRegex, (_, p1, p2) => {
      cursor = {
        name: p1,
        styles: p2,
        next: cursor,
      };
      return p1;
    });

    return typeof value === 'string' ? handleString : '';
  }

  if (shouldAddUnit) {
    return value + 'px';
  }

  return value;
};

const handleInterpolation = (
  mergedProps,
  registered,
  interpolation,
  couldBeSelectorInterpolation,
) => {
  const type = typeof interpolation;
  const isInvalidValue = interpolation == null || type === 'boolean';
  const cached = registered[interpolation];
  const isCached = cached !== undefined && !couldBeSelectorInterpolation;

  if (isInvalidValue) {
    return '';
  }

  if (type === 'object') {
    if (interpolation.anim === 1) {
      cursor = {
        name: interpolation.name,
        styles: interpolation.styles,
        next: cursor,
      };

      return interpolation.name;
    }

    if (interpolation.styles !== undefined) {
      let next = interpolation.next;

      if (next !== undefined) {
        while (next !== undefined) {
          cursor = {
            name: next.name,
            styles: next.styles,
            next: cursor,
          };
          next = next.next;
        }
      }

      let styles = interpolation.styles;
      if (
        process.env.NODE_ENV !== 'production' &&
        interpolation.map !== undefined
      ) {
        styles += interpolation.map;
      }

      return styles;
    }

    return createStringFromObject(mergedProps, registered, interpolation);
  }

  if (type === 'function') {
    if (mergedProps !== undefined) {
      let previousCursor = cursor;
      let result = interpolation(mergedProps);
      cursor = previousCursor;

      return handleInterpolation(
        mergedProps,
        registered,
        result,
        couldBeSelectorInterpolation,
      );
    }
  }

  if (registered == null) {
    return interpolation;
  }

  return isCached ? cached : interpolation;
};

function createStringFromObject(mergedProps, registered, interpolated) {
  let string = '';

  if (Array.isArray(interpolated)) {
    interpolated.forEach(item => {
      string += handleInterpolation(mergedProps, registered, item, false);
    });
    return string;
  }

  for (let key in interpolated) {
    let value = interpolated[key];

    if (typeof value !== 'object') {
      if (registered != null && registered[value] !== undefined) {
        string += `${key}{${registered[value]}}`;
      } else {
        string += `${handleStyleName(key)}:${handleStyleValue(key, value)};`;
      }
      continue
    }

    if (
      Array.isArray(value) &&
      typeof value[0] === 'string' &&
      (registered == null || registered[value[0]] === undefined)
    ) {
      for (let i = 0; i < value.length; i++) {
        string += `${handleStyleName(key)}:${handleStyleValue(key, value[i])};`;
      }
      continue
    }

    const final = handleInterpolation(mergedProps, registered, value, false);

    switch (key) {
      case 'animation':
      case 'animationName': {
        string += `${handleStyleName(key)}:${final};`;
        break;
      }
      default: {
        string += `${key}{${final}}`;
      }
    }
  }

  return string;
}

const serializeStyles = (args, registered, mergedProps) => {
  const isSingleArg = args.length === 1 && args[0] !== null;
  const isObjectArg = isSingleArg && typeof args[0] === 'object';
  const hasStyles = isObjectArg && args[0].styles !== undefined;

  if (hasStyles) {
    return args[0];
  }

  cursor = undefined;

  let strings = args[0];
  let styles = '';

  styles += handleInterpolation(mergedProps, registered, strings, false);

  args.forEach((arg, index) => {
    if (index !== 0) {
      styles += handleInterpolation(
        mergedProps,
        registered,
        arg,
        styles.charCodeAt(styles.length - 1) === 46,
      );
    }
  });

  let sourceMap;
  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, match => {
      sourceMap = match;
      return '';
    });
  }

  labelPattern.lastIndex = 0;

  let identifierName = '';
  let match;

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }

  const name = hashString(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    return {
      name,
      styles,
      map: sourceMap,
      next: cursor,
    };
  }

  return {
    name,
    styles,
    next: cursor,
  };
};

export default serializeStyles;
