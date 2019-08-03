import style from './utils/style';
import compose from './utils/compose';

export const position = style({
  prop: 'position'
});

export const zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});

export const top = style({
  prop: 'top'
});

export const right = style({
  prop: 'right'
});

export const bottom = style({
  prop: 'bottom'
});

export const left = style({
  prop: 'left'
});

export default compose(
  position,
  zIndex,
  top,
  right,
  bottom,
  left
);
