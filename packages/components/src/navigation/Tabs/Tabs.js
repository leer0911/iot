import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import animate from '../../utils/animate';
import ScrollbarSize from './ScrollbarSize';
import TabIndicator from './TabIndicator';
import TabScrollButton from './TabScrollButton';

export const styles = theme => ({
  root: {
    overflow: 'hidden',
    minHeight: 48,
    WebkitOverflowScrolling: 'touch',
  },
  flexContainer: {
    display: 'flex',
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
  scrollButtonsDesktop: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
});

const Tabs = props => {
  const {
    className,
    action,
    centered,
    children: childrenProp,
    component: Component,
    onChange,
    ScrollButtonComponent,
    scrollButtons,
    textColor,
    theme,
    value,
    variant,
    indicatorColor,
    ...other
  } = props;

  const classes = useClasses(styles);

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [scrollerStyle, setScrollerStyle] = useState({
    overflow: 'hidden',
    marginBottom: null,
  });
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const valueToIndex = new Map();

  const scrollable = variant === 'scrollable';
  const tabsRef = useRef(null);

  const getConditionalElements = () => {
    const conditionalElements = {};
    const scrollButtonsActive = showLeftScroll || showRightScroll;

    conditionalElements.scrollbarSizeListener = scrollable ? (
      <ScrollbarSize
        className={classes.scrollable}
        onChange={handleScrollbarSizeChange}
      />
    ) : null;

    const showScrollButtons =
      scrollable &&
      ((scrollButtons === 'auto' && scrollButtonsActive) ||
        scrollButtons === 'desktop' ||
        scrollButtons === 'on');

    conditionalElements.scrollButtonLeft = showScrollButtons ? (
      <ScrollButtonComponent
        onClick={handleLeftScrollClick}
        visible={showLeftScroll}
        className={cx(classes.scrollButtons, {
          [classes.scrollButtonsDesktop]: scrollButtons !== 'on',
        })}
      />
    ) : null;

    conditionalElements.scrollButtonRight = showScrollButtons ? (
      <ScrollButtonComponent
        onClick={handleRightScrollClick}
        visible={showRightScroll}
        className={cx(classes.scrollButtons, {
          [classes.scrollButtonsDesktop]: scrollButtons !== 'on',
        })}
      />
    ) : null;

    return conditionalElements;
  };

  const getTabsMeta = useCallback(
    value => {
      let tabsMeta;
      if (tabsRef) {
        const rect = tabsRef.current.getBoundingClientRect();
        tabsMeta = {
          clientWidth: tabsRef.clientWidth,
          scrollLeft: tabsRef.scrollLeft,
          scrollWidth: tabsRef.scrollWidth,
          left: rect.left,
          right: rect.right,
        };
      }

      let tabMeta;
      if (tabsRef && value !== false) {
        const children = tabsRef.current.children[0].children;

        if (children.length > 0) {
          const tab = children[valueToIndex.get(value)];
          tabMeta = tab ? tab.getBoundingClientRect() : null;
        }
      }
      return { tabsMeta, tabMeta };
    },
    [valueToIndex],
  );

  const scroll = value => {
    animate('scrollLeft', tabsRef, value);
  };

  const moveTabsScroll = delta => {
    const nextScrollLeft = tabsRef.scrollLeft + delta;
    const invert = 1;
    scroll(invert * nextScrollLeft);
  };

  const handleLeftScrollClick = () => {
    moveTabsScroll(-tabsRef.clientWidth);
  };

  const handleRightScrollClick = () => {
    moveTabsScroll(tabsRef.clientWidth);
  };

  const handleScrollbarSizeChange = scrollbarHeight => {
    setScrollerStyle({
      scrollerStyle: {
        overflow: null,
        marginBottom: -scrollbarHeight,
      },
    });
  };

  const scrollSelectedIntoView = useCallback(() => {
    const { tabsMeta, tabMeta } = getTabsMeta(value);
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta.left < tabsMeta.left) {
      const nextScrollLeft =
        tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
      scroll(nextScrollLeft);
    } else if (tabMeta.right > tabsMeta.right) {
      const nextScrollLeft =
        tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
      scroll(nextScrollLeft);
    }
  }, [getTabsMeta, value]);

  const updateScrollButtonState = useCallback(() => {
    if (scrollable && scrollButtons !== 'off') {
      const { scrollWidth, clientWidth, scrollLeft } = tabsRef;
      const _showLeftScroll = scrollLeft > 1;
      const _showRightScroll = scrollLeft < scrollWidth - clientWidth - 1;

      if (
        showLeftScroll !== _showLeftScroll ||
        showRightScroll !== _showRightScroll
      ) {
        setShowLeftScroll(showLeftScroll);
        setShowRightScroll(showRightScroll);
      }
    }
  }, [scrollButtons, scrollable, showLeftScroll, showRightScroll]);

  useEffect(() => {
    const updateIndicatorState = () => {
      const { tabsMeta, tabMeta } = getTabsMeta(value);
      let left = 0;

      if (tabMeta && tabsMeta) {
        const correction = tabsMeta.scrollLeft || 0;
        left = Math.round(tabMeta.left - tabsMeta.left + correction);
      }

      const indicatorStyle = {
        left,
        width: tabMeta ? Math.round(tabMeta.width) : 0,
      };

      setIndicatorStyle(indicatorStyle);
    };
    updateIndicatorState();
  }, [getTabsMeta, value]);

  useEffect(() => {
    updateScrollButtonState();
  }, [props, updateScrollButtonState]);

  useEffect(() => {
    updateScrollButtonState();
    scrollSelectedIntoView();
  }, [props, scrollSelectedIntoView, updateScrollButtonState]);

  let childIndex = 0;

  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const childValue =
      child.props.value === undefined ? childIndex : child.props.value;

    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;

    childIndex += 1;
    return React.cloneElement(child, {
      fullWidth: variant === 'fullWidth',
      selected,
      onChange,
      textColor,
      value: childValue,
    });
  });

  const conditionalElements = getConditionalElements();

  return (
    <Component className={cx(classes.root, className)} {...other}>
      <div className={classes.flexContainer}>
        {conditionalElements.scrollButtonLeft}
        {conditionalElements.scrollbarSizeListener}
        <div
          className={cx(classes.scroller, {
            [classes.fixed]: !scrollable,
            [classes.scrollable]: scrollable,
          })}
          style={scrollerStyle}
          ref={tabsRef}
        >
          <div
            className={cx(classes.flexContainer, {
              [classes.centered]: centered && !scrollable,
            })}
          >
            {children}
          </div>
          <TabIndicator color={indicatorColor} style={indicatorStyle} />
        </div>
        {conditionalElements.scrollButtonRight}
      </div>
    </Component>
  );
};

Tabs.propTypes = {
  action: PropTypes.func,
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  indicatorColor: PropTypes.oneOf(['secondary', 'primary']),
  onChange: PropTypes.func,
  ScrollButtonComponent: PropTypes.elementType,
  scrollButtons: PropTypes.oneOf(['auto', 'desktop', 'on', 'off']),
  TabIndicatorProps: PropTypes.object,
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
  value: PropTypes.any,
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),
};

Tabs.defaultProps = {
  centered: false,
  component: 'div',
  indicatorColor: 'secondary',
  ScrollButtonComponent: TabScrollButton,
  scrollButtons: 'auto',
  textColor: 'inherit',
  variant: 'standard',
};

export default Tabs;
