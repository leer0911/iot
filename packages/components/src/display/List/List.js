import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import ListContext from './ListContext';

export const styles = {
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  padding: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  dense: {},
  subheader: {
    paddingTop: 0,
  },
};

const List = props => {
  const {
    children,
    className,
    component: Component = 'ul',
    dense = false,
    disablePadding = false,
    subheader,
    ...other
  } = props;

  const classes = useClasses(styles);

  const context = React.useMemo(() => ({ dense }), [dense]);

  return (
    <ListContext.Provider value={context}>
      <Component
        className={cx(
          classes.root,
          {
            [classes.dense]: dense,
            [classes.padding]: !disablePadding,
            [classes.subheader]: subheader,
          },
          className,
        )}
        {...other}
      >
        {subheader}
        {children}
      </Component>
    </ListContext.Provider>
  );
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  dense: PropTypes.bool,
  disablePadding: PropTypes.bool,
  subheader: PropTypes.node,
};

export default List;
