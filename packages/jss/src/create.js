import createCache from './cache';
import serializeStyles from './serialize';
import { insertStyles, insertWithoutScoping, merge, classnames } from './utils';

const create = options => {
  const cache = createCache(options);
  cache.compat = true;
  cache.sheet.speedy = function(value) {
    this.isSpeedy = value;
  };
  const { registered } = cache;

  const css = (...args) => {
    const serialized = serializeStyles(args, registered);

    // 插入样式
    insertStyles(cache, serialized, false);

    return `${cache.key}-${serialized.name}`;
  };

  const keyframes = (...args) => {
    const serialized = serializeStyles(args, registered);
    const { name } = serialized;
    const animation = `animation-${name}`;
    const styles = `@keyframes ${animation}{${serialized.styles}}`;

    // 插入样式
    insertWithoutScoping(cache, { name, styles });

    return animation;
  };

  const cx = (...args) => {
    return merge(registered, css, classnames(args));
  };

  return {
    cx,
    css,
    keyframes,
  };
};

export default create;
