import PropTypes from 'prop-types';
import { SPACINGS, ALIGNCONTENT, ALIGNITEMS, DIRECTION, JUSTIFY, WRAP } from './constants';

export const gridPropTypes = {
  children: PropTypes.node,
  as: PropTypes.elementType,

  container: PropTypes.bool, // If `true`, the component will have the flex *container* behavior.
  item: PropTypes.bool, // If `true`, the component will have the flex *item* behavior.

  direction: PropTypes.oneOf(DIRECTION),
  alignContent: PropTypes.oneOf(ALIGNCONTENT),
  alignItems: PropTypes.oneOf(ALIGNITEMS),
  justify: PropTypes.oneOf(JUSTIFY),
  wrap: PropTypes.oneOf(WRAP),

  spacing: PropTypes.oneOf(SPACINGS)
};
