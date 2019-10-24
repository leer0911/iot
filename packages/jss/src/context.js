import * as React from 'react';
import createCache from './cache';
import { isBrowser } from './utils';

let EmotionCacheContext = React.createContext(isBrowser ? createCache() : null);

export let ThemeContext = React.createContext({});
export let CacheProvider = EmotionCacheContext.Provider;

let withEmotionCache = function withEmotionCache(func) {
  let render = (props, ref) => {
    return (
      <EmotionCacheContext.Consumer>
        {cache => {
          return func(props, cache, ref);
        }}
      </EmotionCacheContext.Consumer>
    );
  };
  return React.forwardRef(render);
};

export { withEmotionCache };
