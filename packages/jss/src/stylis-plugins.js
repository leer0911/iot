// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet

const delimiter = '/*|*/';
const needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

export let Sheet = {
  current: null,
};

export let ruleSheet = (
  context,
  content,
  selectors,
  parents,
  line,
  column,
  length,
  ns,
  depth,
  at,
) => {
  switch (context) {
    case 1: {
      switch (content.charCodeAt(0)) {
        case 64: {
          Sheet.current.insert(content + ';');
          return '';
        }
        case 108: {
          if (content.charCodeAt(2) === 98) {
            return '';
          }
          break;
        }
        default:
          break;
      }
      break;
    }
    // selector
    case 2: {
      if (ns === 0) return content + delimiter;
      break;
    }
    // at-rule
    case 3: {
      switch (ns) {
        // @font-face, @page
        case 102:
        case 112: {
          Sheet.current.insert(selectors[0] + content);
          return '';
        }
        default: {
          return content + (at === 0 ? delimiter : '');
        }
      }
    }
    case -2: {
      content.split(needle).forEach(toSheet);
      break;
    }
    default:
      break;
  }
};

export let removeLabel = (context, content) => {
  if (
    context === 1 &&
    content.charCodeAt(0) === 108 &&
    content.charCodeAt(2) === 98
  ) {
    return '';
  }
};
