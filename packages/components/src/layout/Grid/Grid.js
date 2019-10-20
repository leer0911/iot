import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';

const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  const styles = {};

  GRID_SIZES.forEach(size => {
    const key = `grid-${breakpoint}-${size}`;

    if (size === true) {
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%',
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none',
      };
      return;
    }

    const width = `${Math.round((size / 12) * 10e7) / 10e5}%`;

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width,
    };
  });

  if (breakpoint === 'xs') {
    Object.assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val, div = 1) {
  const parse = parseFloat(val);
  return `${parse / div}${String(val).replace(String(parse), '') || 'px'}`;
}

function generateGutter(theme, breakpoint) {
  const styles = {};

  SPACINGS.forEach(spacing => {
    const themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
      margin: `-${getOffset(themeSpacing, 2)}`,
      width: `calc(100% + ${getOffset(themeSpacing)})`,
      '& > *': {
        // 用于嵌套样式
        padding: getOffset(themeSpacing, 2),
      },
    };
  });

  return styles;
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
export const styles = theme => ({
  root: {},
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  item: {
    boxSizing: 'border-box',
    margin: '0',
  },
  zeroMinWidth: {
    minWidth: 0,
  },
  'direction-xs-column': {
    flexDirection: 'column',
  },
  'direction-xs-column-reverse': {
    flexDirection: 'column-reverse',
  },
  'direction-xs-row-reverse': {
    flexDirection: 'row-reverse',
  },
  'wrap-xs-nowrap': {
    flexWrap: 'nowrap',
  },
  'wrap-xs-wrap-reverse': {
    flexWrap: 'wrap-reverse',
  },
  'align-items-xs-center': {
    alignItems: 'center',
  },
  'align-items-xs-flex-start': {
    alignItems: 'flex-start',
  },
  'align-items-xs-flex-end': {
    alignItems: 'flex-end',
  },
  'align-items-xs-baseline': {
    alignItems: 'baseline',
  },
  'align-content-xs-center': {
    alignContent: 'center',
  },
  'align-content-xs-flex-start': {
    alignContent: 'flex-start',
  },
  'align-content-xs-flex-end': {
    alignContent: 'flex-end',
  },
  'align-content-xs-space-between': {
    alignContent: 'space-between',
  },
  'align-content-xs-space-around': {
    alignContent: 'space-around',
  },
  'justify-xs-center': {
    justifyContent: 'center',
  },
  'justify-xs-flex-end': {
    justifyContent: 'flex-end',
  },
  'justify-xs-space-between': {
    justifyContent: 'space-between',
  },
  'justify-xs-space-around': {
    justifyContent: 'space-around',
  },
  'justify-xs-space-evenly': {
    justifyContent: 'space-evenly',
  },
  ...generateGutter(theme, 'xs'),
  ...theme.breakpoints.keys.reduce((accumulator, key) => {
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}),
});

const Grid = React.forwardRef((props, ref) => {
  const {
    alignContent = 'stretch',
    alignItems = 'stretch',
    className: classNameProp,
    component: Component = 'div',
    container = false,
    direction = 'row',
    item = false,
    justify = 'flex-start',
    lg = false,
    md = false,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false,
    ...other
  } = props;

  const classes = useClasses(styles);

  const className = cx(
    classes.root,
    {
      [classes.container]: container,
      [classes.item]: item,
      [classes.zeroMinWidth]: zeroMinWidth,
      [classes[`spacing-xs-${String(spacing)}`]]: container && spacing !== 0,
      [classes[`direction-xs-${String(direction)}`]]: direction !== 'row',
      [classes[`wrap-xs-${String(wrap)}`]]: wrap !== 'wrap',
      [classes[`align-items-xs-${String(alignItems)}`]]:
        alignItems !== 'stretch',
      [classes[`align-content-xs-${String(alignContent)}`]]:
        alignContent !== 'stretch',
      [classes[`justify-xs-${String(justify)}`]]: justify !== 'flex-start',
      [classes[`grid-xs-${String(xs)}`]]: xs !== false,
      [classes[`grid-sm-${String(sm)}`]]: sm !== false,
      [classes[`grid-md-${String(md)}`]]: md !== false,
      [classes[`grid-lg-${String(lg)}`]]: lg !== false,
      [classes[`grid-xl-${String(xl)}`]]: xl !== false,
    },
    classNameProp,
  );

  return <Component className={className} ref={ref} {...other} />;
});

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  container: PropTypes.bool,
  item: PropTypes.bool,
  zeroMinWidth: PropTypes.bool,
  spacing: PropTypes.oneOf(SPACINGS),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline',
  ]),
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  lg: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  md: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  sm: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  xl: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  xs: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
};

export default Grid;
