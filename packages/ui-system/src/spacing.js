import { handleBreakpoints } from './utils/breakpoints';
import merge from './utils/merge';
import memoize from './utils/memoize';

const properties = {
  m: 'margin',
  p: 'padding'
};

const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};

const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// Memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction)
    ? direction.map(dir => property + dir)
    : [property + direction];
});

const spacingKeys = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY'
];

function getTransformer(theme) {
  const themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return abs => themeSpacing * abs;
  }

  if (Array.isArray(themeSpacing)) {
    return abs => {
      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  return () => undefined;
}

function getValue(transformer, propValue) {
  if (typeof propValue === 'string') {
    return propValue;
  }

  const abs = Math.abs(propValue);
  const transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return `-${transformed}`;
}

function getStyleFromPropValue(cssProperties, transformer) {
  return propValue =>
    cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
}

function spacing(props) {
  const theme = props.theme;
  const transformer = getTransformer(theme);

  return Object.keys(props)
    .map(prop => {
      // Using a hash computation over an array iteration could be faster, but with only 28 items,
      // it's doesn't worth the bundle size.
      if (spacingKeys.indexOf(prop) === -1) {
        return null;
      }

      const cssProperties = getCssProperties(prop);
      const styleFromPropValue = getStyleFromPropValue(
        cssProperties,
        transformer
      );

      const propValue = props[prop];
      return handleBreakpoints(props, propValue, styleFromPropValue);
    })
    .reduce(merge, {});
}

spacing.filterProps = spacingKeys;

export default spacing;
