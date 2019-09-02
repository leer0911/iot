import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    fontSize: theme.typography.pxToRem(24),
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  colorAction: {
    color: theme.palette.action.active,
  },
  colorError: {
    color: theme.palette.error.main,
  },
  colorDisabled: {
    color: theme.palette.action.disabled,
  },
  fontSizeInherit: {
    fontSize: 'inherit',
  },
  fontSizeSmall: {
    fontSize: theme.typography.pxToRem(20),
  },
  fontSizeLarge: {
    fontSize: theme.typography.pxToRem(35),
  },
});

const SvgIcon = props => {
  const {
    children,
    className,
    color = 'inherit',
    fontSize = 'default',
    htmlColor,
    titleAccess,
    viewBox = '0 0 24 24',
    ...rest
  } = props;

  const classes = useClasses(styles);

  return (
    <svg
      className={cx(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'inherit',
          [classes[`fontSize${capitalize(fontSize)}`]]: fontSize !== 'default',
        },
        className,
      )}
      focusable="false"
      viewBox={viewBox}
      color={htmlColor}
      {...rest}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
  );
};

SvgIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'action',
    'error',
    'disabled',
  ]),
  fontSize: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
  htmlColor: PropTypes.string,
  titleAccess: PropTypes.string,
  viewBox: PropTypes.string,
};

export default SvgIcon;
