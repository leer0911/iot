import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { useClasses } from '../../styles';

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(20),
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none',
  },
  colorDefault: {
    color: theme.palette.background.default,
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[600],
  },
  img: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover',
  },
});

const Avatar = props => {
  const {
    alt,
    children: childrenProp,
    childrenClassName: childrenClassNameProp,
    className: classNameProp,
    component: Component = 'div',
    imgProps,
    sizes,
    src,
    srcSet,
    ...other
  } = props;

  let children = null;
  const img = src || srcSet;

  const classes = useClasses(styles);

  if (img) {
    children = (
      <img
        alt={alt}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        className={classes.img}
        {...imgProps}
      />
    );
  } else if (childrenClassNameProp && React.isValidElement(childrenProp)) {
    children = React.cloneElement(childrenProp, {
      className: cx(childrenClassNameProp, childrenProp.props.className),
    });
  } else {
    children = childrenProp;
  }

  return (
    <Component
      className={cx(
        classes.root,
        classes.system,
        {
          [classes.colorDefault]: !img,
        },
        classNameProp,
      )}
      {...other}
    >
      {children}
    </Component>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  childrenClassName: PropTypes.string,
  className: PropTypes.string,
  component: PropTypes.elementType,
  imgProps: PropTypes.object,
  sizes: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
};

export default Avatar;
