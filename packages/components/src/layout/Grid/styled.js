import {
  css,
  compose,
  display,
  flexbox,
  spacing,
  sizing
} from '@iot/ui-system';
import { styled } from '../../styles';

export const styleFunction = css(
  compose(
    display,
    flexbox,
    spacing,
    sizing
  )
);

const GridRoot = styled('div', styleFunction);

export default GridRoot;
