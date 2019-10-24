import { styled, isPropValid } from '@iot/jss';

export default (tagName, styleFunction) => {
  const filterProps = styleFunction.filterProps || [];

  // shouldForwardProp 用于 过滤 ui system 中已设置为 prop 的属性
  return styled(tagName, {
    shouldForwardProp: prop =>
      filterProps.indexOf(prop) === -1 && isPropValid(prop),
  })(styleFunction);
};
