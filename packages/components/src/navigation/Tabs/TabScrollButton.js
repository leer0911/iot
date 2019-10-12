import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import KeyboardArrowLeft from '../../icon/KeyboardArrowLeft';
import KeyboardArrowRight from '../../icon/KeyboardArrowRight';
import ButtonBase from '../../inputs/ButtonBase';

export const styles = {
  root: {
    width: 40,
    flexShrink: 0,
  },
  vertical: {
    width: '100%',
    height: 40,
    '& svg': {
      transform: 'rotate(90deg)',
    },
  },
};

const TabScrollButton = props => {
  const {
    className: classNameProp,
    direction,
    orientation,
    visible,
    ...other
  } = props;

  const classes = useClasses(styles);

  const className = cx(
    classes.root,
    {
      [classes.vertical]: orientation === 'vertical',
    },
    classNameProp,
  );

  if (!visible) {
    return <div className={className} />;
  }

  return (
    <ButtonBase component="div" className={className} {...other}>
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
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default TabScrollButton;
