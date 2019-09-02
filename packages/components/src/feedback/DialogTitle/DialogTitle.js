import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import Typography from '../../display/Typography';

export const styles = {
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto',
  },
};

const DialogTitle = props => {
  const { children, className, disableTypography = false, ...other } = props;
  const classes = useClasses(styles);

  return (
    <div className={cx(classes.root, className)} {...other}>
      {disableTypography ? (
        children
      ) : (
        <Typography component="h2" variant="h6">
          {children}
        </Typography>
      )}
    </div>
  );
};

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disableTypography: PropTypes.bool,
};

export default DialogTitle;
