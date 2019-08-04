import {
  css,
  compose,
  borders,
  sizing,
  flexbox,
  positions,
  palette,
  shadows,
  spacing,
  typography
} from '@iot/ui-system';
import { styled } from '../../styles';

export const styleFunction = css(
  compose(
    borders,
    sizing,
    flexbox,
    positions,
    palette,
    shadows,
    sizing,
    spacing,
    typography
  )
);

const Box = styled('div', styleFunction);

export default Box;
