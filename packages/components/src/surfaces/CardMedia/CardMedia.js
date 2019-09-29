import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

export const styles = {
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  media: {
    width: '100%',
    objectFit: 'cover',
  },
};

const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];

const CardMedia = props => {
  const {
    className,
    component: Component = 'div',
    image,
    src,
    style,
    ...other
  } = props;
  const classes = useClasses(styles);

  const isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  const composedStyle =
    !isMediaComponent && image
      ? { backgroundImage: `url("${image}")`, ...style }
      : style;

  return (
    <Component
      className={cx(
        classes.root,
        {
          [classes.media]: isMediaComponent,
        },
        className,
      )}
      style={composedStyle}
      src={isMediaComponent ? image || src : undefined}
      {...other}
    />
  );
};

CardMedia.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  image: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object,
};

export default CardMedia;
