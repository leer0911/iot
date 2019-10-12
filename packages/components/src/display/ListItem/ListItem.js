import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import ButtonBase from '../../inputs/ButtonBase';
import ListContext from '../List/ListContext';

export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    paddingTop: 8,
    paddingBottom: 8,
  },
  container: {
    position: 'relative',
  },
  dense: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  disabled: {
    opacity: 0.5,
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundClip: 'padding-box',
  },
  gutters: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  secondaryAction: {
    paddingRight: 48,
  },
  selected: {},
});

const ListItem = props => {
  const {
    className,
    alignItems = 'center',
    children: childrenProp,
    component: componentProp,
    ContainerComponent = 'li',
    ContainerProps: { className: ContainerClassName, ...ContainerProps } = {},
    dense,
    button = false,
    disabled = false,
    disableGutters = false,
    divider = false,
    selected = false,
    ...other
  } = props;

  const classes = useClasses(styles);
  const context = React.useContext(ListContext);

  const childContext = {
    dense: dense || context.dense || false,
    alignItems,
  };

  const children = React.Children.toArray(childrenProp);
  const hasSecondaryAction =
    children.length &&
    ['ListItemSecondaryAction'].indexOf(children[children.length - 1].type) !==
      -1;

  const componentProps = {
    className: cx(
      classes.root,
      {
        [classes.dense]: childContext.dense,
        [classes.gutters]: !disableGutters,
        [classes.divider]: divider,
        [classes.disabled]: disabled,
        [classes.button]: button,
        [classes.alignItemsFlexStart]: alignItems === 'flex-start',
        [classes.secondaryAction]: hasSecondaryAction,
        [classes.selected]: selected,
      },
      className,
    ),
    disabled,
    ...other,
  };

  let Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    Component = ButtonBase;
  }

  if (hasSecondaryAction) {
    Component = !componentProps.component && !componentProp ? 'div' : Component;
    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return (
      <ListContext.Provider value={childContext}>
        <ContainerComponent
          className={cx(classes.container, ContainerClassName)}
          {...ContainerProps}
        >
          <Component {...componentProps}>{children}</Component>
          {children.pop()}
        </ContainerComponent>
      </ListContext.Provider>
    );
  }

  return (
    <ListContext.Provider value={childContext}>
      <Component {...componentProps}>{children}</Component>
    </ListContext.Provider>
  );
};

ListItem.propTypes = {
  alignItems: PropTypes.oneOf(['flex-start', 'center']),
  button: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.elementType,
  ContainerComponent: PropTypes.elementType,
  ContainerProps: PropTypes.object,
  dense: PropTypes.bool,
  disabled: PropTypes.bool,
  disableGutters: PropTypes.bool,
  divider: PropTypes.bool,
  selected: PropTypes.bool,
};

export default ListItem;
