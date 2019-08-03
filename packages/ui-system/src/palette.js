import style from './utils/style';
import compose from './utils/compose';

export const color = style({
  prop: 'color',
  themeKey: 'palette'
});

export const bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});

const palette = compose(
  color,
  bgcolor
);

export default palette;
