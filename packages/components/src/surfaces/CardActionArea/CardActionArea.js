import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import ButtonBase from '../../inputs/ButtonBase';

export const styles = theme => ({
  root: {
    display: 'block',
    textAlign: 'inherit',
    width: '100%',
  },
  focusHighlight: {
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    opacity: 0,
    backgroundColor: 'currentcolor',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.short,
    }),
  },
});

const CardActionArea = props => {
  const { children, className, focusVisibleClassName, ...other } = props;
  const classes = useClasses(styles);

  return (
    <ButtonBase
      className={cx(classes.root, className)}
      focusVisibleClassName={cx(focusVisibleClassName, classes.focusVisible)}
      {...other}
    >
      {children}
      <span className={classes.focusHighlight} />
    </ButtonBase>
  );
};

CardActionArea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  focusVisibleClassName: PropTypes.string,
};

export default CardActionArea;
