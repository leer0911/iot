import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

export const styles = {
  root: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

const ListItemSecondaryAction = props => {
  const { className, ...other } = props;
  const classes = useClasses(styles);

  return <div className={cx(classes.root, className)} {...other} />;
};

ListItemSecondaryAction.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ListItemSecondaryAction;
