import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import EventListener from 'react-event-listener';
import debounce from 'debounce';
import {
  getNormalizedScrollLeft,
  detectScrollType,
} from 'normalize-scroll-left';
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
  scrollButtons: {},
  scrollButtonsDesktop: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  indicator: {},
});

class Tabs extends React.Component {
  constructor() {
    super();

    if (typeof window !== 'undefined') {
      this.handleResize = debounce(() => {
        this.updateIndicatorState(this.props);
        this.updateScrollButtonState();
      }, 166);

      this.handleTabsScroll = debounce(() => {
        this.updateScrollButtonState();
      }, 166);
    }
  }

  state = {
    indicatorStyle: {},
    scrollerStyle: {
      overflow: 'hidden',
      marginBottom: null,
    },
    showLeftScroll: false,
    showRightScroll: false,
    mounted: false,
  };

  componentDidMount() {
    this.setState({ mounted: true });
    this.updateIndicatorState(this.props);
    this.updateScrollButtonState();

    if (this.props.action) {
      this.props.action({
        updateIndicator: this.handleResize,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateIndicatorState(this.props);
    this.updateScrollButtonState();

    if (this.state.indicatorStyle !== prevState.indicatorStyle) {
      this.scrollSelectedIntoView();
    }
  }

  componentWillUnmount() {
    this.handleResize.clear();
    this.handleTabsScroll.clear();
  }

  getConditionalElements = () => {
    const {
      classes,
      ScrollButtonComponent,
      scrollButtons,
      theme,
      variant,
    } = this.props;

    const { showLeftScroll, showRightScroll } = this.state;
    const conditionalElements = {};
    const scrollable = variant === 'scrollable';

    conditionalElements.scrollbarSizeListener = scrollable ? (
      <ScrollbarSize
        className={classes.scrollable}
        onChange={this.handleScrollbarSizeChange}
      />
    ) : null;

    const scrollButtonsActive = showLeftScroll || showRightScroll;
    const showScrollButtons =
      scrollable &&
      ((scrollButtons === 'auto' && scrollButtonsActive) ||
        scrollButtons === 'desktop' ||
        scrollButtons === 'on');

    conditionalElements.scrollButtonLeft = showScrollButtons ? (
      <ScrollButtonComponent
        direction={theme.direction === 'rtl' ? 'right' : 'left'}
        onClick={this.handleLeftScrollClick}
        visible={showLeftScroll}
        className={cx(classes.scrollButtons, {
          [classes.scrollButtonsDesktop]: scrollButtons !== 'on',
        })}
      />
    ) : null;

    conditionalElements.scrollButtonRight = showScrollButtons ? (
      <ScrollButtonComponent
        direction={theme.direction === 'rtl' ? 'left' : 'right'}
        onClick={this.handleRightScrollClick}
        visible={showRightScroll}
        className={cx(classes.scrollButtons, {
          [classes.scrollButtonsDesktop]: scrollButtons !== 'on',
        })}
      />
    ) : null;

    return conditionalElements;
  };

  getTabsMeta = (value, direction) => {
    let tabsMeta;
    if (this.tabsRef) {
      const rect = this.tabsRef.getBoundingClientRect();
      tabsMeta = {
        clientWidth: this.tabsRef.clientWidth,
        scrollLeft: this.tabsRef.scrollLeft,
        scrollLeftNormalized: getNormalizedScrollLeft(this.tabsRef, direction),
        scrollWidth: this.tabsRef.scrollWidth,
        left: rect.left,
        right: rect.right,
      };
    }

    let tabMeta;
    if (this.tabsRef && value !== false) {
      const children = this.tabsRef.children[0].children;

      if (children.length > 0) {
        const tab = children[this.valueToIndex.get(value)];
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta, tabMeta };
  };

  handleLeftScrollClick = () => {
    this.moveTabsScroll(-this.tabsRef.clientWidth);
  };

  handleRightScrollClick = () => {
    this.moveTabsScroll(this.tabsRef.clientWidth);
  };

  handleScrollbarSizeChange = scrollbarHeight => {
    this.setState({
      scrollerStyle: {
        overflow: null,
        marginBottom: -scrollbarHeight,
      },
    });
  };

  handleTabsRef = ref => {
    this.tabsRef = ref;
  };

  moveTabsScroll = delta => {
    const { theme } = this.props;

    const multiplier = theme.direction === 'rtl' ? -1 : 1;
    const nextScrollLeft = this.tabsRef.scrollLeft + delta * multiplier;
    const invert =
      theme.direction === 'rtl' && detectScrollType() === 'reverse' ? -1 : 1;
    this.scroll(invert * nextScrollLeft);
  };

  scrollSelectedIntoView = () => {
    const { theme, value } = this.props;
    const { tabsMeta, tabMeta } = this.getTabsMeta(value, theme.direction);

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta.left < tabsMeta.left) {
      const nextScrollLeft =
        tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
      this.scroll(nextScrollLeft);
    } else if (tabMeta.right > tabsMeta.right) {
      const nextScrollLeft =
        tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
      this.scroll(nextScrollLeft);
    }
  };

  scroll = value => {
    animate('scrollLeft', this.tabsRef, value);
  };

  updateScrollButtonState = () => {
    const { scrollButtons, theme, variant } = this.props;
    const scrollable = variant === 'scrollable';

    if (scrollable && scrollButtons !== 'off') {
      const { scrollWidth, clientWidth } = this.tabsRef;
      const scrollLeft = getNormalizedScrollLeft(this.tabsRef, theme.direction);

      const showLeftScroll =
        theme.direction === 'rtl'
          ? scrollLeft < scrollWidth - clientWidth - 1
          : scrollLeft > 1;
      const showRightScroll =
        theme.direction !== 'rtl'
          ? scrollLeft < scrollWidth - clientWidth - 1
          : scrollLeft > 1;

      if (
        showLeftScroll !== this.state.showLeftScroll ||
        showRightScroll !== this.state.showRightScroll
      ) {
        this.setState({ showLeftScroll, showRightScroll });
      }
    }
  };

  updateIndicatorState(props) {
    const { theme, value } = props;

    const { tabsMeta, tabMeta } = this.getTabsMeta(value, theme.direction);
    let left = 0;

    if (tabMeta && tabsMeta) {
      const correction =
        theme.direction === 'rtl'
          ? tabsMeta.scrollLeftNormalized +
            tabsMeta.clientWidth -
            tabsMeta.scrollWidth
          : tabsMeta.scrollLeft;
      left = Math.round(tabMeta.left - tabsMeta.left + correction);
    }

    const indicatorStyle = {
      left,
      width: tabMeta ? Math.round(tabMeta.width) : 0,
    };

    if (
      (indicatorStyle.left !== this.state.indicatorStyle.left ||
        indicatorStyle.width !== this.state.indicatorStyle.width) &&
      !isNaN(indicatorStyle.left) &&
      !isNaN(indicatorStyle.width)
    ) {
      this.setState({ indicatorStyle });
    }
  }

  render() {
    const {
      action,
      centered,
      children: childrenProp,
      classes,
      className,
      component: Component,
      indicatorColor,
      innerRef,
      onChange,
      ScrollButtonComponent,
      scrollButtons,
      TabIndicatorProps = {},
      textColor,
      theme,
      value,
      variant,
      ...other
    } = this.props;

    const scrollable = variant === 'scrollable';

    const indicator = (
      <TabIndicator
        className={classes.indicator}
        color={indicatorColor}
        {...TabIndicatorProps}
        style={{
          ...this.state.indicatorStyle,
          ...TabIndicatorProps.style,
        }}
      />
    );

    this.valueToIndex = new Map();
    let childIndex = 0;
    const children = React.Children.map(childrenProp, child => {
      if (!React.isValidElement(child)) {
        return null;
      }

      const childValue =
        child.props.value === undefined ? childIndex : child.props.value;
      this.valueToIndex.set(childValue, childIndex);
      const selected = childValue === value;

      childIndex += 1;
      return React.cloneElement(child, {
        fullWidth: variant === 'fullWidth',
        indicator: selected && !this.state.mounted && indicator,
        selected,
        onChange,
        textColor,
        value: childValue,
      });
    });

    const conditionalElements = this.getConditionalElements();

    return (
      <Component
        className={cx(classes.root, className)}
        ref={innerRef}
        {...other}
      >
        <EventListener target="window" onResize={this.handleResize} />
        <div className={classes.flexContainer}>
          {conditionalElements.scrollButtonLeft}
          {conditionalElements.scrollbarSizeListener}
          <div
            className={cx(classes.scroller, {
              [classes.fixed]: !scrollable,
              [classes.scrollable]: scrollable,
            })}
            style={this.state.scrollerStyle}
            ref={this.handleTabsRef}
            onScroll={this.handleTabsScroll}
          >
            <div
              className={cx(classes.flexContainer, {
                [classes.centered]: centered && !scrollable,
              })}
            >
              {children}
            </div>
            {this.state.mounted && indicator}
          </div>
          {conditionalElements.scrollButtonRight}
        </div>
      </Component>
    );
  }
}

Tabs.propTypes = {
  action: PropTypes.func,
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  indicatorColor: PropTypes.oneOf(['secondary', 'primary']),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onChange: PropTypes.func,
  ScrollButtonComponent: PropTypes.elementType,
  scrollButtons: PropTypes.oneOf(['auto', 'desktop', 'on', 'off']),
  TabIndicatorProps: PropTypes.object,
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
  theme: PropTypes.object.isRequired,
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
