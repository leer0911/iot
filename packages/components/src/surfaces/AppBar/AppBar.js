import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import { capitalize } from '../../utils/helpers';
import Paper from '../Paper';

export const styles = theme => {
  const backgroundColorDefault =
    theme.palette.type === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[900];

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionSticky: {
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionStatic: {
      position: 'static'
    },
    positionRelative: {
      position: 'relative'
    },
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  };
};

const AppBar = (props, ref) => {
  const { className, color = 'primary', position = 'fixed', ...rest } = props;

  const classes = useClasses(styles);

  return (
    <Paper
      square
      component="header"
      elevation={4}
      className={cx(
        classes.root,
        classes[`position${capitalize(position)}`],
        {
          [classes[`color${capitalize(color)}`]]: color !== 'inherit'
        },
        className
      )}
      {...rest}
    />
  );
};

AppBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),
  position: PropTypes.oneOf([
    'fixed',
    'absolute',
    'sticky',
    'static',
    'relative'
  ])
};

export default AppBar;
