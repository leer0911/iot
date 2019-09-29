import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

export const styles = {
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24,
    },
  },
};

const CardContent = props => {
  const { className, component: Component = 'div', ...other } = props;
  const classes = useClasses(styles);

  return <Component className={cx(classes.root, className)} {...other} />;
};

CardContent.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
};

export default CardContent;
