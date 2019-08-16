import * as React from 'react';

export type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
export type GridContentAlignment = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type GridSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type GridJustification = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type GridSize = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  container?: boolean;
  item?: boolean;
  direction?: GridDirection;
  alignContent?: GridContentAlignment;
  alignItems?: GridItemsAlignment;
  justify?: GridJustification;
  spacing?: GridSpacing;
  grid?: GridSize;
  wrap?: GridWrap;
}

declare const Grid: React.ComponentType<GridProps>;

export default Grid;
