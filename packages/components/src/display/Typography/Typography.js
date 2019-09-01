import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import { capitalize } from '../../utils/helpers';

export const styles = theme => ({
  root: {
    margin: 0,
  },
  h1: theme.typography.h1,
  h2: theme.typography.h2,
  h3: theme.typography.h3,
  h4: theme.typography.h4,
  h5: theme.typography.h5,
  h6: theme.typography.h6,
  subtitle1: theme.typography.subtitle1,
  subtitle2: theme.typography.subtitle2,
  body2: theme.typography.body2,
  body1: theme.typography.body1,
  button: theme.typography.button,
  caption: theme.typography.caption,
  overline: theme.typography.overline,
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  alignJustify: {
    textAlign: 'justify',
  },
  noWrap: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  gutterBottom: {
    marginBottom: '0.35em',
  },
  paragraph: {
    marginBottom: 16,
  },
  colorInherit: {
    color: 'inherit',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  colorTextPrimary: {
    color: theme.palette.text.primary,
  },
  colorTextSecondary: {
    color: theme.palette.text.secondary,
  },
  colorError: {
    color: theme.palette.error.main,
  },
  displayInline: {
    display: 'inline',
  },
  displayBlock: {
    display: 'block',
  },
});

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
};

const Typography = props => {
  const {
    className: classNameProp,
    component,
    variant = 'body1',
    color = 'initial',
    align = 'inherit',
    display = 'initial',
    variantMapping = defaultVariantMapping,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    ...rest
  } = props;

  const classes = useClasses(styles);

  const componentVariant = paragraph
    ? 'p'
    : variantMapping[variant] || defaultVariantMapping[variant];

  const Component = component || componentVariant || 'span';

  const className = cx(
    classes.root,
    {
      [classes[variant]]: variant !== 'inherit',
      [classes[`color${capitalize(color)}`]]: color !== 'initial',
      [classes[`align${capitalize(align)}`]]: align !== 'inherit',
      [classes[`display${capitalize(display)}`]]: display !== 'initial',
      [classes.paragraph]: paragraph,
      [classes.noWrap]: noWrap,
      [classes.gutterBottom]: gutterBottom,
    },
    classNameProp,
  );

  return <Component className={className} {...rest} />;
};

Typography.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit',
  ]),
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
  ]),
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  variantMapping: PropTypes.object,
  children: PropTypes.node,
};

export default Typography;
