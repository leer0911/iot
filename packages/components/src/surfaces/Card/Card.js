import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import Paper from '../Paper';

export const styles = {
  root: {
    overflow: 'hidden',
  },
};

const Card = props => {
  const { className, raised = false, ...other } = props;
  const classes = useClasses(styles);

  return (
    <Paper
      className={cx(classes.root, className)}
      elevation={raised ? 8 : 1}
      {...other}
    />
  );
};

Card.propTypes = {
  className: PropTypes.string,
  raised: PropTypes.bool,
};

export default Card;
