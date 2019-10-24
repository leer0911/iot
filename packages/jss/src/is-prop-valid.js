import regexString from './props';
import { memoize } from './utils';

const reactPropsRegex = new RegExp(regexString);

export default memoize(
  prop =>
    reactPropsRegex.test(prop) ||
    (prop.charCodeAt(0) === 111 /* o */ &&
    prop.charCodeAt(1) === 110 /* n */ &&
      prop.charCodeAt(2) < 91) /* Z+1 */,
);
