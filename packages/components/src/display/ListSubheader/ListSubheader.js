import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    boxSizing: 'border-box',
    lineHeight: '48px',
    listStyle: 'none',
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorInherit: {
    color: 'inherit',
  },
  gutters: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  inset: {
    paddingLeft: 72,
  },
  sticky: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: 'inherit',
  },
});

const ListSubheader = props => {
  const {
    className,
    color = 'default',
    component: Component = 'li',
    disableGutters = false,
    disableSticky = false,
    inset = false,
    ...other
  } = props;

  const classes = useClasses(styles);

  return (
    <Component
      className={cx(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'default',
          [classes.inset]: inset,
          [classes.sticky]: !disableSticky,
          [classes.gutters]: !disableGutters,
        },
        className,
      )}
      {...other}
    />
  );
};

ListSubheader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'inherit']),
  component: PropTypes.elementType,
  disableGutters: PropTypes.bool,
  disableSticky: PropTypes.bool,
  inset: PropTypes.bool,
};

export default ListSubheader;
