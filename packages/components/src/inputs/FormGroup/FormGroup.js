import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
  },
};

const FormGroup = props => {
  const { className, row = false, ...other } = props;

  const classes = useClasses(styles);

  return (
    <div
      className={cx(
        classes.root,
        {
          [classes.row]: row,
        },
        className,
      )}
      {...other}
    />
  );
};

FormGroup.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  row: PropTypes.bool,
};

export default FormGroup;
