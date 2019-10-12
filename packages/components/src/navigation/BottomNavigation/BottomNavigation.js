import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';

export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 56,
    backgroundColor: theme.palette.background.paper,
  },
});

const BottomNavigation = props => {
  const {
    component: Component = 'div',
    children,
    onChange,
    showLabels = false,
    value,
    ...rest
  } = props;

  const classes = useClasses(styles);

  return (
    <Component className={cx(classes.root)} {...rest}>
      {React.Children.map(children, (child, childIndex) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        const childValue =
          child.props.value === undefined ? childIndex : child.props.value;
        return React.cloneElement(child, {
          selected: childValue === value,
          showLabel:
            child.props.showLabel !== undefined
              ? child.props.showLabel
              : showLabels,
          value: childValue,
          onChange,
        });
      })}
    </Component>
  );
};

BottomNavigation.propTypes = {
  component: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  showLabels: PropTypes.bool,
  value: PropTypes.any,
};

export default BottomNavigation;
