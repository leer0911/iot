import isPropValid from '../is-prop-valid';

const testOmitPropsOnStringTag = isPropValid;
const testOmitPropsOnComponent = key => key !== 'theme' && key !== 'innerRef';

export const getDefaultShouldForwardProp = tag =>
  typeof tag === 'string' && tag.charCodeAt(0) > 96
    ? testOmitPropsOnStringTag
    : testOmitPropsOnComponent;
