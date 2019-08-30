import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

const styles = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
  },
};

const Textarea = props => {
  const { onChange, rows, rowsMax, style, value, ...other } = props;

  const { current: isControlled } = React.useRef(value != null);
  const inputRef = React.useRef(null);
  const [state, setState] = React.useState({});
  const shadowRef = React.useRef(null);

  const syncHeight = React.useCallback(() => {
    const input = inputRef.current;
    const inputShallow = shadowRef.current;

    const computedStyle = window.getComputedStyle(input);
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    const innerHeight = inputShallow.scrollHeight;
    const boxSizing = computedStyle['box-sizing'];

    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight;

    let outerHeight = innerHeight;

    if (rows != null) {
      outerHeight = Math.max(Number(rows) * singleRowHeight, outerHeight);
    }
    if (rowsMax != null) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    if (boxSizing === 'content-box') {
      outerHeight -=
        getStyleValue(computedStyle, 'padding-bottom') +
        getStyleValue(computedStyle, 'padding-top');
    } else if (boxSizing === 'border-box') {
      outerHeight +=
        getStyleValue(computedStyle, 'border-bottom-width') +
        getStyleValue(computedStyle, 'border-top-width');
    }

    setState(prevState => {
      if (
        outerHeight > 0 &&
        Math.abs((prevState.outerHeight || 0) - outerHeight) > 1
      ) {
        return {
          innerHeight,
          outerHeight,
        };
      }

      return prevState;
    });
  }, [setState, rows, rowsMax, props.placeholder]);

  useLayoutEffect(() => {
    syncHeight();
  });

  const handleChange = event => {
    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <React.Fragment>
      <textarea
        ref={inputRef}
        value={value}
        onChange={handleChange}
        style={{
          height: state.outerHeight,
          overflow: state.outerHeight === state.innerHeight ? 'hidden' : null,
          ...style,
        }}
        {...other}
      />
      <textarea
        aria-hidden
        className={props.className}
        readOnly
        ref={shadowRef}
        tabIndex={-1}
        style={{ ...styles.shadow, ...style }}
      />
    </React.Fragment>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  value: PropTypes.any,
};

export default Textarea;
