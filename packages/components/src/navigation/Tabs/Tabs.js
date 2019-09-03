import React, {
  useCallback,
  useState,
  useRef,
  useEffect,
  isValidElement,
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import { animate, useEventCallback } from '../../utils';

import ScrollbarSize from './ScrollbarSize';
import TabIndicator from './TabIndicator';
import TabScrollButton from './TabScrollButton';

export const styles = theme => ({
  root: {
    overflow: 'hidden',
    minHeight: 48,
    WebkitOverflowScrolling: 'touch',
    display: 'flex',
  },
  vertical: {
    flexDirection: 'column',
  },
  flexContainer: {
    display: 'flex',
  },
  flexContainerVertical: {
    flexDirection: 'column',
  },
  centered: {
    justifyContent: 'center',
  },
  scroller: {
    position: 'relative',
    display: 'inline-block',
    flex: '1 1 auto',
    whiteSpace: 'nowrap',
  },
  fixed: {
    overflowX: 'hidden',
    width: '100%',
  },
  scrollable: {
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

const Tabs = props => {
  const {
    className,
    children: childrenProp,
    component: Component = 'div',
    variant = 'standard',
    textColor = 'inherit',
    indicatorColor = 'secondary',
    orientation = 'horizontal',
    scrollButtons = 'auto',
    ScrollButtonComponent = TabScrollButton,
    TabIndicatorProps = {},
    value,
    onChange,
    centered = false,
    ...other
  } = props;

  const classes = useClasses(styles);
  const scrollable = variant === 'scrollable';
  const vertical = orientation === 'vertical';
  const scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  const start = vertical ? 'top' : 'left';
  const end = vertical ? 'bottom' : 'right';
  const clientSize = vertical ? 'clientHeight' : 'clientWidth';
  const size = vertical ? 'height' : 'width';

  const [mounted, setMounted] = useState(false);

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [displayScroll, setDisplayScroll] = useState({
    start: false,
    end: false,
  });
  const [scrollerStyle, setScrollerStyle] = useState({
    overflow: 'hidden',
    marginBottom: null,
  });

  const valueToIndex = new Map();
  const tabsRef = useRef(null);
  const childrenWrapperRef = useRef(null);

  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;

    let tabsMeta;

    if (tabsNode) {
      const { top, left, bottom, right } = tabsNode.getBoundingClientRect();
      const { clientWidth, scrollLeft, scrollTop, scrollWidth } = tabsNode;
      tabsMeta = {
        clientWidth,
        scrollLeft,
        scrollTop,
        scrollWidth,
        top,
        bottom,
        left,
        right,
      };
    }

    let tabMeta;

    if (tabsNode && value !== false) {
      const children = childrenWrapperRef.current.children;

      if (children.length > 0) {
        const tab = children[valueToIndex.get(value)];
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta, tabMeta };
  };

  const updateIndicatorState = useEventCallback(() => {
    const { tabsMeta, tabMeta } = getTabsMeta();
    let startValue = 0;

    if (tabMeta && tabsMeta) {
      if (vertical) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      } else {
        startValue = tabMeta.left - tabsMeta.left + tabsMeta.scrollLeft;
      }
    }

    const newIndicatorStyle = {
      [start]: startValue,
      [size]: tabMeta ? tabMeta[size] : 0,
    };

    if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  const scroll = scrollValue => {
    animate(scrollStart, tabsRef.current, scrollValue);
  };

  const moveTabsScroll = delta => {
    let scrollValue = tabsRef.current[scrollStart] + delta;
    scroll(scrollValue);
  };

  const handleStartScrollClick = () => {
    moveTabsScroll(-tabsRef.current[clientSize]);
  };

  const handleEndScrollClick = () => {
    moveTabsScroll(tabsRef.current[clientSize]);
  };

  const handleScrollbarSizeChange = useCallback(scrollbarHeight => {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight,
    });
  }, []);

  const getConditionalElements = () => {
    const conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? (
      <ScrollbarSize
        className={classes.scrollable}
        onChange={handleScrollbarSizeChange}
      />
    ) : null;

    const scrollButtonsActive = displayScroll.start || displayScroll.end;
    const showScrollButtons =
      scrollable &&
      ((scrollButtons === 'auto' && scrollButtonsActive) ||
        scrollButtons === 'desktop' ||
        scrollButtons === 'on');

    conditionalElements.scrollButtonStart = showScrollButtons ? (
      <ScrollButtonComponent
        orientation={orientation}
        direction="left"
        onClick={handleStartScrollClick}
        visible={displayScroll.start}
        className={cx(classes.scrollButtons, {
          [classes.scrollButtonsDesktop]: scrollButtons !== 'on',
        })}
      />
    ) : null;

    conditionalElements.scrollButtonEnd = showScrollButtons ? (
      <ScrollButtonComponent
        orientation={orientation}
        direction="right"
        onClick={handleEndScrollClick}
        visible={displayScroll.end}
        className={cx(classes.scrollButtons, {
          [classes.scrollButtonsDesktop]: scrollButtons !== 'on',
        })}
      />
    ) : null;

    return conditionalElements;
  };

  const scrollSelectedIntoView = useEventCallback(() => {
    const { tabsMeta, tabMeta } = getTabsMeta();

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta[start] < tabsMeta[start]) {
      const nextScrollStart =
        tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart);
    } else if (tabMeta[end] > tabsMeta[end]) {
      const nextScrollStart =
        tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(nextScrollStart);
    }
  });

  const updateScrollButtonState = useEventCallback(() => {
    if (scrollable && scrollButtons !== 'off') {
      const {
        scrollTop,
        scrollLeft,
        scrollHeight,
        clientHeight,
        scrollWidth,
        clientWidth,
      } = tabsRef.current;
      let showStartScroll;
      let showEndScroll;

      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        showStartScroll = scrollLeft > 1;
        showEndScroll = scrollLeft < scrollWidth - clientWidth - 1;
      }

      if (
        showStartScroll !== displayScroll.start ||
        showEndScroll !== displayScroll.end
      ) {
        setDisplayScroll({ start: showStartScroll, end: showEndScroll });
      }
    }
  });

  const handleTabsScroll = useCallback(() => {
    updateScrollButtonState();
  }, [updateScrollButtonState]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    updateIndicatorState();
    updateScrollButtonState();
  });

  useEffect(() => {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);

  const indicator = (
    <TabIndicator
      className={classes.indicator}
      orientation={orientation}
      color={indicatorColor}
      {...TabIndicatorProps}
      style={{
        ...indicatorStyle,
        ...TabIndicatorProps.style,
      }}
    />
  );

  let childIndex = 0;
  const children = React.Children.map(childrenProp, child => {
    if (!isValidElement(child)) {
      return null;
    }

    const childValue =
      child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;

    childIndex += 1;
    return cloneElement(child, {
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected,
      onChange,
      textColor,
      value: childValue,
    });
  });

  const conditionalElements = getConditionalElements();

  return (
    <Component
      className={cx(
        classes.root,
        {
          [classes.vertical]: vertical,
        },
        className,
      )}
      {...other}
    >
      {conditionalElements.scrollButtonStart}
      {conditionalElements.scrollbarSizeListener}
      <div
        className={cx(classes.scroller, {
          [classes.fixed]: !scrollable,
          [classes.scrollable]: scrollable,
        })}
        style={scrollerStyle}
        ref={tabsRef}
        onScroll={handleTabsScroll}
      >
        <div
          className={cx(classes.flexContainer, {
            [classes.flexContainerVertical]: vertical,
            [classes.centered]: centered && !scrollable,
          })}
          ref={childrenWrapperRef}
        >
          {children}
        </div>
        {mounted && indicator}
      </div>
      {conditionalElements.scrollButtonEnd}
    </Component>
  );
};

Tabs.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  scrollButtons: PropTypes.oneOf(['auto', 'on', 'off']),
  ScrollButtonComponent: PropTypes.elementType,
  indicatorColor: PropTypes.oneOf(['secondary', 'primary']),
  TabIndicatorProps: PropTypes.object,
  value: PropTypes.any,
  onChange: PropTypes.func,
  centered: PropTypes.bool,
};

export default Tabs;
