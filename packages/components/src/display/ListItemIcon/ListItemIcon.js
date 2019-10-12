import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import ListContext from '../List/ListContext';

export const styles = theme => ({
  root: {
    minWidth: 56,
    color: theme.palette.action.active,
    flexShrink: 0,
    display: 'inline-flex',
  },
  alignItemsFlexStart: {
    marginTop: 8,
  },
});

const ListItemIcon = props => {
  const { className, ...other } = props;
  const classes = useClasses(styles);
  const context = React.useContext(ListContext);

  return (
    <div
      className={cx(
        classes.root,
        {
          [classes.alignItemsFlexStart]: context.alignItems === 'flex-start',
        },
        className,
      )}
      {...other}
    />
  );
};

ListItemIcon.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default ListItemIcon;
