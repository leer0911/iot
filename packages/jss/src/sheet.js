const sheetForTag = tag => {
  const { sheet } = tag;
  const { styleSheets } = document;

  if (sheet) {
    return sheet;
  }

  return styleSheets.filter(styleSheet => styleSheet.ownerNode === tag);
};

const createStyleElement = ({ key, nonce }) => {
  let tag = document.createElement('style');

  tag.setAttribute('data-emotion', key);

  if (nonce !== undefined) {
    tag.setAttribute('nonce', nonce);
  }

  tag.appendChild(document.createTextNode(''));

  return tag;
};

export class StyleSheet {
  constructor(options) {
    const {
      key,
      nonce,
      container,
      speedy = process.env.NODE_ENV === 'production',
    } = options;

    this.key = key;
    this.nonce = nonce;
    this.isSpeedy = speedy;
    this.container = container;

    this.tags = [];
    this.ctr = 0;
    this.before = null;
  }

  insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      const length = this.tags.length;
      const tag = createStyleElement(this);
      const nextSibling = length !== 0 && this.tags[length - 1].nextSibling;
      const before = length === 0 ? this.before : nextSibling;

      this.container.insertBefore(tag, before);
      this.tags.push(tag);
    }

    const tag = this.tags[this.tags.length - 1];

    this.ctr++;

    if (this.isSpeedy) {
      const sheet = sheetForTag(tag);
      try {
        let isImportRule =
          rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64;

        sheet.insertRule(rule, isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(
            `There was a problem inserting the following rule: "${rule}"`,
            e,
          );
        }
      }
      return;
    }

    tag.appendChild(document.createTextNode(rule));
  }

  flush() {
    this.tags.forEach(tag => tag.parentNode.removeChild(tag));
    this.tags = [];
    this.ctr = 0;
  }
}
