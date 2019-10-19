import PropTypes from 'prop-types';
import { SPACINGS, GRID_SIZES, ALIGN_CONTENT, ALIGN_ITEMS, DIRECTION, JUSTIFY, WRAP } from './constants';

export const gridPropTypes = {
  children: PropTypes.node,

  container: PropTypes.bool, // If `true`, the component will have the flex *container* behavior.
  item: PropTypes.bool, // If `true`, the component will have the flex *item* behavior.

  direction: PropTypes.oneOf(DIRECTION),
  align_Content: PropTypes.oneOf(ALIGN_CONTENT),
  align_Items: PropTypes.oneOf(ALIGN_ITEMS),
  justify: PropTypes.oneOf(JUSTIFY),
  wrap: PropTypes.oneOf(WRAP),

  spacing: PropTypes.oneOf(SPACINGS),
  grid: PropTypes.oneOf(GRID_SIZES),
};
