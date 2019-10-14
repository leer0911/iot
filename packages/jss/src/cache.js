import Stylis from './stylis'; // CSS 预处理器
import { StyleSheet } from './sheet';
import { Sheet, ruleSheet } from './stylis-plugins';

const createCache = (options = {}) => {
  const { key = 'css', prefix, nonce, speedy, stylisPlugins } = options;
  const stylisOptions = prefix ? { prefix } : {};
  const stylis = new Stylis({ ...stylisOptions });

  const container = options.container || document.head;
  const nodeList = document.querySelectorAll(`style[data-emotion-${key}]`);
  const nodes = Array.from(nodeList);
  let inserted = {};
  let cache = {};

  nodes.forEach(node => {
    const attrib = node.getAttribute(`data-emotion-${key}`);

    attrib.split(' ').forEach(id => {
      inserted[id] = true;
    });

    node.parentNode !== container && container.appendChild(node);
  });

  stylis.use(stylisPlugins)(ruleSheet);

  const insert = (selector, serialized, sheet, shouldCache) => {
    const { name, map } = serialized;
    Sheet.current = sheet;

    if (process.env.NODE_ENV !== 'production' && map !== undefined) {
      Sheet.current = {
        insert: rule => {
          sheet.insert(rule + map);
        },
      };
    }

    stylis(selector, serialized.styles);

    if (shouldCache) {
      cache.inserted[name] = true;
    }
  };

  const sheet = new StyleSheet({
    key,
    nonce,
    speedy,
    container,
  });

  cache = {
    key,
    nonce,
    sheet,
    insert,
    inserted,
    registered: {},
  };

  return cache;
};

export default createCache;
