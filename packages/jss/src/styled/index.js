import styled from '../styled-base/index';
import { tags } from './tags';

// bind it to avoid mutating the original function
const newStyled = styled.bind();

tags.forEach(tagName => {
  newStyled[tagName] = newStyled(tagName);
});

export default newStyled;
