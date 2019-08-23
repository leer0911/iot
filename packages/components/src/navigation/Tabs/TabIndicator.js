import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

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
});

const TabIndicator = props => {
  const { className, color, ...other } = props;

  const classes = useClasses(styles);

  return (
    <span
      className={cx(
        classes.root,
        classes[`color${capitalize(color)}`],
        className,
      )}
      {...other}
    />
  );
};

TabIndicator.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
};

export default TabIndicator;
