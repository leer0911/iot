import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import Modal from '../../feedback/Modal';
import Grow from '../Grow';
import Paper from '../../surface/Paper';

export function getOffsetTop(rect, vertical) {
  let offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

export function getOffsetLeft(rect, horizontal) {
  let offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical]
    .map(n => (typeof n === 'number' ? `${n}px` : n))
    .join(' ');
}

function getScrollParent(parent, child) {
  let element = child;
  let scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }
  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

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
    elevation = 8,
    marginThreshold = 16,
    getContentAnchorEl,
    PaperProps = {},
    TransitionComponent = Grow,
    TransitionProps = {},
    transformOrigin = {
      vertical: 'top',
      horizontal: 'left',
    },
    onEnter,
    onExit,
    ...other
  } = props;
  const paperRef = React.useRef();
  const classes = useClasses(styles);

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

  React.useEffect(() => {
    if (!updatePosition) {
      return undefined;
    }

    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('resize', updatePosition);
      updatePosition.clear();
    };
  }, [updatePosition]);

  const container = containerProp || getAnchorEl(anchorEl).body;

  return (
    <Modal
      container={container}
      open={open}
      BackdropProps={{ invisible: true }}
      {...other}
    >
      <TransitionComponent
        appear
        in={open}
        onEnter={onEnter}
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

Popover.propTypes = {
  action: PropTypes.node,
  anchorEl: PropTypes.node,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['left', 'center', 'right']),
    ]).isRequired,
    vertical: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['top', 'center', 'bottom']),
    ]).isRequired,
  }),
  anchorPosition: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
  }),
  anchorReference: PropTypes.oneOf(['anchorEl', 'anchorPosition', 'none']),
  children: PropTypes.node,
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  elevation: PropTypes.number,
  getContentAnchorEl: PropTypes.func,
  marginThreshold: PropTypes.number,
  ModalClasses: PropTypes.object,
  onClose: PropTypes.func,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  open: PropTypes.bool.isRequired,
  transformOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['left', 'center', 'right']),
    ]).isRequired,
    vertical: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['top', 'center', 'bottom']),
    ]).isRequired,
  }),
  TransitionComponent: PropTypes.elementType,
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
    PropTypes.oneOf(['auto']),
  ]),
  TransitionProps: PropTypes.object,
};

export default Popover;
