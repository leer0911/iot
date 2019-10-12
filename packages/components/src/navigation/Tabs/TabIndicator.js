import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    position: 'absolute',
    height: 2,
    bottom: 0,
    width: '100%',
    transition: theme.transitions.create(),
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  vertical: {
    height: '100%',
    width: 2,
    right: 0,
  },
});

const TabIndicator = props => {
  const { className, color, orientation, ...other } = props;
  const classes = useClasses(styles);

  return (
    <span
      className={cx(
        classes.root,
        {
          [classes.vertical]: orientation === 'vertical',
        },
        classes[`color${capitalize(color)}`],
        className,
      )}
      {...other}
    />
  );
};

TabIndicator.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
};

export default TabIndicator;
