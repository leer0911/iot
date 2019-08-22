import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import KeyboardArrowLeft from '../../icon/KeyboardArrowLeft';
import KeyboardArrowRight from '../../icon/KeyboardArrowRight';

import ButtonBase from '../../inputs/ButtonBase';

export const styles = {
  root: {
    color: 'inherit',
    width: 40,
    flexShrink: 0,
  },
};

const TabScrollButton = props => {
  const {
    className: classNameProp,
    direction,
    onClick,
    visible = true,
    ...other
  } = props;

  const classes = useClasses(styles);
  const className = cx(classes.root, classNameProp);

  if (!visible) {
    return <div className={className} />;
  }

  return (
    <ButtonBase
      component="div"
      className={className}
      onClick={onClick}
      {...other}
    >
      {direction === 'left' ? (
        <KeyboardArrowLeft fontSize="small" />
      ) : (
        <KeyboardArrowRight fontSize="small" />
      )}
    </ButtonBase>
  );
};

TabScrollButton.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  visible: PropTypes.bool,
};

export default TabScrollButton;
