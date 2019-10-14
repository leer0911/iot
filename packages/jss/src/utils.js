let isBrowser = typeof document !== 'undefined';

export function getRegisteredStyles(registered, registeredStyles, classNames) {
  let rawClassName = '';

  classNames.split(' ').forEach(className => {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += `${className} `;
    }
  });
  return rawClassName;
}

export const insertStyles = (cache, serialized, isStringTag) => {
  let className = `${cache.key}-${serialized.name}`;
  if (
    (isStringTag === false ||
      (isBrowser === false && cache.compat !== undefined)) &&
    cache.registered[className] === undefined
  ) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === undefined) {
    let stylesForSSR = '';
    let current = serialized;
    do {
      let maybeStyles = cache.insert(
        `.${className}`,
        current,
        cache.sheet,
        true,
      );
      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== undefined);
    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

export function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

export function merge(registered, css, className) {
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

export function memoize(fn) {
  const cache = {};

  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

export function weakMemoize(func) {
  const cache = new WeakMap();
  return arg => {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    const ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
}

export function classnames(args) {
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
}
