import isPropValid from './is-prop-valid';
export let isBrowser = typeof document !== 'undefined';

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

export function insertStyles(cache, serialized, isStringTag = false) {
  let className = `${cache.key}-${serialized.name}`;

  const isSSR = isBrowser === false && cache.compat !== undefined;
  const hasRegisteredCache = cache.registered[className] !== undefined;

  if ((!isStringTag || isSSR) && !hasRegisteredCache) {
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
}

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

  args.forEach(arg => {
    const type = typeof arg;
    if (arg == null || type === 'boolean') {
      return;
    }

    let reduce = arg;
    if (type === 'object') {
      if (Array.isArray(arg)) {
        reduce = classnames(arg);
      } else {
        reduce = '';
        for (const k in arg) {
          if (arg[k] && k) {
            reduce && (reduce += ' ');
            reduce += k;
          }
        }
      }
    }

    if (reduce) {
      cls && (cls += ' ');
      cls += reduce;
    }
  });

  return cls;
}

const testOmitPropsOnStringTag = isPropValid;
const testOmitPropsOnComponent = key => key !== 'theme' && key !== 'innerRef';

export const getDefaultShouldForwardProp = tag =>
  typeof tag === 'string' && tag.charCodeAt(0) > 96
    ? testOmitPropsOnStringTag
    : testOmitPropsOnComponent;
