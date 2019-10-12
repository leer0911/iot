import React from 'react';
import ReactDOM from 'react-dom';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import Modal from '../../feedback/Modal';
import Grow from '../Grow';
import Paper from '../../surfaces/Paper';

import {
  getAnchorEl,
  getScrollParent,
  getTransformOriginValue,
  getOffsetTop,
  getOffsetLeft,
} from './utils';
import propTypes from './propTypes';

export const styles = {
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  },
};

const Popover = props => {
  const {
    children,
    container: containerProp,
    open,
    action,
    anchorEl,
    anchorPosition,
    anchorReference = 'anchorEl',
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'left',
    },
    transformOrigin = {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl,
    PaperProps = {},
    TransitionProps = {},
    TransitionComponent = Grow,
    onEnter,
    onExit,
    elevation = 8,
    marginThreshold = 16,
    ...other
  } = props;

  const paperRef = React.useRef();
  const classes = useClasses(styles);

  // 获取点击元素的偏移位置
  const getAnchorOffset = React.useCallback(
    contentAnchorOffset => {
      if (anchorReference === 'anchorPosition') {
        return anchorPosition;
      }

      const resolvedAnchorEl = getAnchorEl(anchorEl);
      const anchorRect = resolvedAnchorEl.getBoundingClientRect();
      const anchorVertical =
        contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';

      return {
        top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
        left:
          anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal),
      };
    },
    [
      anchorEl,
      anchorOrigin.horizontal,
      anchorOrigin.vertical,
      anchorPosition,
      anchorReference,
    ],
  );

  // 获取自定义方法的偏移位置
  const getContentAnchorOffset = React.useCallback(
    element => {
      let contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        const contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && element.contains(contentAnchorEl)) {
          const scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset =
            contentAnchorEl.offsetTop +
              contentAnchorEl.clientHeight / 2 -
              scrollTop || 0;
        }
      }

      return contentAnchorOffset;
    },
    [anchorReference, getContentAnchorEl],
  );

  const getTransformOrigin = React.useCallback(
    (elemRect, contentAnchorOffset = 0) => {
      return {
        vertical:
          getOffsetTop(elemRect, transformOrigin.vertical) +
          contentAnchorOffset,
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal),
      };
    },
    [transformOrigin.horizontal, transformOrigin.vertical],
  );

  const getPositioningStyle = React.useCallback(
    element => {
      const contentAnchorOffset = getContentAnchorOffset(element);
      const elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight,
      };

      const elemTransformOrigin = getTransformOrigin(
        elemRect,
        contentAnchorOffset,
      );

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(elemTransformOrigin),
        };
      }

      const anchorOffset = getAnchorOffset(contentAnchorOffset);

      let top = anchorOffset.top - elemTransformOrigin.vertical;
      let left = anchorOffset.left - elemTransformOrigin.horizontal;
      const bottom = top + elemRect.height;
      const right = left + elemRect.width;

      const containerWindow = getAnchorEl(anchorEl);

      const heightThreshold = containerWindow.innerHeight - marginThreshold;
      const widthThreshold = containerWindow.innerWidth - marginThreshold;

      if (top < marginThreshold) {
        const diff = top - marginThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        const diff = bottom - heightThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      }

      if (left < marginThreshold) {
        const diff = left - marginThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      } else if (right > widthThreshold) {
        const diff = right - widthThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      }

      return {
        top: `${top}px`,
        left: `${left}px`,
        transformOrigin: getTransformOriginValue(elemTransformOrigin),
      };
    },
    [
      anchorEl,
      anchorReference,
      getAnchorOffset,
      getContentAnchorOffset,
      getTransformOrigin,
      marginThreshold,
    ],
  );

  const setPositioningStyles = React.useCallback(
    element => {
      const positioning = getPositioningStyle(element);

      if (positioning.top !== null) {
        element.style.top = positioning.top;
      }
      if (positioning.left !== null) {
        element.style.left = positioning.left;
      }
      element.style.transformOrigin = positioning.transformOrigin;
    },
    [getPositioningStyle],
  );

  const handlePaperRef = React.useCallback(instance => {
    paperRef.current = ReactDOM.findDOMNode(instance);
  }, []);

  const updatePosition = React.useMemo(() => {
    if (!open) {
      return undefined;
    }

    return () => {
      setPositioningStyles(paperRef.current);
    };
  }, [open, setPositioningStyles]);

  React.useImperativeHandle(action, () => (open ? { updatePosition } : null), [
    open,
    updatePosition,
  ]);

  const container = containerProp || getAnchorEl(anchorEl);

  const handleEnter = element => {
    // if (onEnter) {
    //   onEnter(element);
    // }
    // debugger;
    // setPositioningStyles(paperRef.current);
    // console.log(
    //   '====================================> paperRef.current',
    //   paperRef.current,
    // );
    if (paperRef.current) {
      setPositioningStyles(paperRef.current);
    }
  };

  return (
    <Modal
      container={container}
      open={open}
      BackdropProps={{ invisible: true }}
      {...other}
    >
      <TransitionComponent
        in={open}
        onEnter={handleEnter}
        onExit={onExit}
        {...TransitionProps}
      >
        <Paper
          elevation={elevation}
          ref={handlePaperRef}
          {...PaperProps}
          className={cx(classes.paper, PaperProps.className)}
        >
          {children}
        </Paper>
      </TransitionComponent>
    </Modal>
  );
};

Popover.propTypes = propTypes;

export default Popover;
