import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  gutters: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  regular: theme.mixins.toolbar,
  dense: {
    minHeight: 48,
  },
});

const Toolbar = props => {
  const {
    className: classNameProp,
    component: Component = 'div',
    disableGutters = false,
    variant = 'regular',
    ...rest
  } = props;

  const classes = useClasses(styles);

  const className = cx(
    classes.root,
    classes[variant],
    {
      [classes.gutters]: !disableGutters,
    },
    classNameProp,
  );

  return <Component className={className} {...rest} />;
};

Toolbar.propTypes = {
  component: PropTypes.elementType,
  disableGutters: PropTypes.bool,
  variant: PropTypes.oneOf(['regular', 'dense']),
};

export default Toolbar;
