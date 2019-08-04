import React from 'react';
import GridRoot from './styled';
import { gridPropTypes } from './propTypes';
import { useTheme } from '../../theme';

const Grid = props => {
  const {
    container = false,
    item = false,
    spacing = 0,
    alignContent = 'stretch',
    alignItems = 'stretch',
    direction: flexDirection = 'row',
    justify: justifyContent = 'flex-start',
    wrap: flexWrap = 'wrap',
    grid = 1,
    ...rest
  } = props;

  const theme = useTheme() || {};
  const themeSpacing = theme.spacing(spacing);

  const containerStyle = {
    display: 'flex',
    width: `calc(100% + ${themeSpacing}px)`,
    m: `${-themeSpacing / 2}px`,
    flexDirection,
    justifyContent,
    flexWrap,
    alignContent,
    alignItems
  };

  const itemWidth = `${Math.round((grid / 12) * 10e7) / 10e5}%`;
  const itemStyle = {
    p: `${themeSpacing / 2}px`,
    flexBasis: itemWidth,
    flexGrow: 0,
    maxWidth: itemWidth
  };

  const finalStyle = container ? containerStyle : item ? itemStyle : {};

  return <GridRoot boxSizing="border-box" {...finalStyle} {...rest} />;
};

Grid.propTypes = gridPropTypes;

export default Grid;
