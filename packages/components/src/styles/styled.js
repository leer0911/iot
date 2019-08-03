import emotionStyled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

const styled = (tagName, styleFunction) => {
  const filterProps = styleFunction.filterProps || [];

  // shouldForwardProp 用于 过滤 ui system 中已设置为 prop 的属性
  return emotionStyled(tagName, {
    shouldForwardProp: prop =>
      filterProps.indexOf(prop) === -1 && isPropValid(prop)
  })(styleFunction);
};

export default styled;
