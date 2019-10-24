import * as React from 'react';
import { withEmotionCache, ThemeContext } from './context';
import { insertStyles } from '@emotion/utils';
import { isBrowser } from './utils';

import { StyleSheet } from '@emotion/sheet';
import { serializeStyles } from '@emotion/serialize';

export let Global = withEmotionCache((props, cache) => {
  let styles = props.styles;

  if (typeof styles === 'function') {
    return (
      <ThemeContext.Consumer>
        {theme => {
          let serialized = serializeStyles([styles(theme)]);

          return <InnerGlobal serialized={serialized} cache={cache} />;
        }}
      </ThemeContext.Consumer>
    );
  }
  let serialized = serializeStyles([styles]);

  return <InnerGlobal serialized={serialized} cache={cache} />;
});

class InnerGlobal extends React.Component {
  sheet;
  componentDidMount() {
    this.sheet = new StyleSheet({
      key: `${this.props.cache.key}-global`,
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container,
    });
    let node = document.querySelector(
      `style[data-emotion-${this.props.cache.key}="${this.props.serialized.name}"]`,
    );

    if (node !== null) {
      this.sheet.tags.push(node);
    }
    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }
    this.insertStyles();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  }
  insertStyles() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      insertStyles(this.props.cache, this.props.serialized.next, true);
    }
    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      let element = this.sheet.tags[this.sheet.tags.length - 1]
        .nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }
    this.props.cache.insert(``, this.props.serialized, this.sheet, false);
  }

  componentWillUnmount() {
    this.sheet.flush();
  }
  render() {
    if (!isBrowser) {
      let { serialized } = this.props;

      let serializedNames = serialized.name;
      let serializedStyles = serialized.styles;
      let next = serialized.next;
      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }

      let shouldCache = this.props.cache.compat === true;

      let rules = this.props.cache.insert(
        ``,
        { name: serializedNames, styles: serializedStyles },
        this.sheet,
        shouldCache,
      );

      if (!shouldCache) {
        return (
          <style
            {...{
              [`data-emotion-${this.props.cache.key}`]: serializedNames,
              dangerouslySetInnerHTML: { __html: rules },
              nonce: this.props.cache.sheet.nonce,
            }}
          />
        );
      }
    }
    return null;
  }
}
