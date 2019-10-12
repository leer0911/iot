import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';

export const styles = theme => {
  const elevations = {};
  theme.shadows.forEach((shadow, index) => {
    elevations[`elevation${index}`] = {
      boxShadow: shadow,
    };
  });

  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow'),
    },
    rounded: {
      borderRadius: theme.shape.borderRadius,
    },
    ...elevations,
  };
};

const Paper = React.forwardRef((props, ref) => {
  const {
    component: Component = 'div',
    className: classNameProp,
    square = false,
    elevation = 1,
    ...rest
  } = props;

  const classes = useClasses(styles);

  const className = cx(
    classes.root,
    classes[`elevation${elevation}`],
    {
      [classes.rounded]: !square,
    },
    classNameProp,
  );

  return <Component className={className} {...rest} ref={ref} />;
});

Paper.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  elevation: PropTypes.number,
  square: PropTypes.bool,
};

export default Paper;
