import createCache from '@emotion/cache';
import { serializeStyles } from '@emotion/serialize';
import { insertStyles, getRegisteredStyles } from '@emotion/utils';

function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

function merge(registered, css, className) {
  const registeredStyles = [];
  const rawClassName = getRegisteredStyles(
    registered,
    registeredStyles,
    className,
  );

  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}

let createEmotion = options => {
  let cache = createCache(options);

  cache.sheet.speedy = function(value) {
    if (process.env.NODE_ENV !== 'production' && this.ctr !== 0) {
      throw new Error('speedy must be changed before any rules are inserted');
    }
    this.isSpeedy = value;
  };
  cache.compat = true;

  let css = function(...args) {
    let serialized = serializeStyles(
      args,
      cache.registered,
      this !== undefined ? this.mergedProps : undefined,
    );
    insertStyles(cache, serialized, false);
    return `${cache.key}-${serialized.name}`;
  };

  let keyframes = (...args) => {
    let serialized = serializeStyles(args, cache.registered);
    let animation = `animation-${serialized.name}`;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: `@keyframes ${animation}{${serialized.styles}}`,
    });

    return animation;
  };
  let injectGlobal = (...args) => {
    let serialized = serializeStyles(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };

  let cx = (...args) => {
    return merge(cache.registered, css, classnames(args));
  };
  return {
    css,
    cx,
    injectGlobal,
    keyframes,
    hydrate(ids) {
      ids.forEach(key => {
        cache.inserted[key] = true;
      });
    },
    flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    sheet: cache.sheet,
    cache,
    getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css),
  };
};

let classnames = args => {
  let cls = '';
  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    if (arg == null) continue;

    let toAdd;
    switch (typeof arg) {
      case 'boolean':
        break;
      case 'object': {
        if (Array.isArray(arg)) {
          toAdd = classnames(arg);
        } else {
          toAdd = '';
          for (const k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += ' ');
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }
  return cls;
};

export default createEmotion;
