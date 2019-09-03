import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

export const styles = theme => ({
  root: {
    flex: '1 1 auto',
    WebkitOverflowScrolling: 'touch',
    overflowY: 'auto',
    padding: '8px 24px',
    '&:first-child': {
      paddingTop: 20,
    },
  },
  dividers: {
    padding: '16px 24px',
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
});

const DialogContent = props => {
  const { className, dividers = false, ...other } = props;
  const classes = useClasses(styles);

  return (
    <div
      className={cx(
        classes.root,
        {
          [classes.dividers]: dividers,
        },
        className,
      )}
      {...other}
    />
  );
};

DialogContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dividers: PropTypes.bool,
};

export default DialogContent;
