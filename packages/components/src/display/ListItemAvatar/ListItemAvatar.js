import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import ListContext from '../List/ListContext';

export const styles = {
  root: {
    minWidth: 56,
    flexShrink: 0,
  },
  alignItemsFlexStart: {
    marginTop: 8,
  },
};

const ListItemAvatar = props => {
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

ListItemAvatar.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default ListItemAvatar;
