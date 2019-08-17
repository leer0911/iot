import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import RadioButtonUncheckedIcon from '../../icon/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '../../icon/RadioButtonChecked';

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
  },
  checkedLayer: {
    transform: 'scale(1)',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shortest,
    }),
  },
  layer: {
    left: 0,
    position: 'absolute',
    transform: 'scale(0)',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    }),
  },
});

function RadioButtonIcon(props) {
  const { checked, className, ...rest } = props;

  const classes = useClasses(styles);

  return (
    <div className={cx(classes.root, className)} {...rest}>
      <RadioButtonUncheckedIcon />
      <RadioButtonCheckedIcon
        className={cx(classes.layer, { [classes.checkedLayer]: checked })}
      />
    </div>
  );
}

RadioButtonIcon.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
};

export default RadioButtonIcon;
