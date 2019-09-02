import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import Typography from '../../display/Typography';

export const styles = {
  root: {
    marginBottom: 12,
  },
};

const DialogContentText = props => {
  const classes = useClasses(styles);
  return (
    <Typography
      className={cx(classes.root)}
      component="p"
      variant="body1"
      color="textSecondary"
      {...props}
    />
  );
};

DialogContentText.propTypes = {
  children: PropTypes.node,
};

export default DialogContentText;
