import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import { capitalize } from '../../utils/helpers';

export const styles = theme => {
  const align = 'left';

  return {
    root: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: 0,
      pointerEvents: 'none',
      borderRadius: theme.shape.borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      transition: theme.transitions.create(
        [`padding-${align}`, 'border-color', 'border-width'],
        {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut,
        },
      ),
    },
    legend: {
      textAlign: 'left',
      padding: 0,
      lineHeight: '11px',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut,
      }),
    },
  };
};

const NotchedOutline = props => {
  const {
    children,
    className,
    labelWidth: labelWidthProp,
    notched,
    style,
    ...other
  } = props;

  const classes = useClasses(styles);
  const align = 'left';
  const labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0;

  return (
    <fieldset
      style={{
        [`padding${capitalize(align)}`]: 8 + (notched ? 0 : labelWidth / 2),
        ...style,
      }}
      className={cx(classes.root, className)}
      {...other}
    >
      <legend
        className={classes.legend}
        style={{
          width: notched ? labelWidth : 0.01,
        }}
      >
        {/* Use the nominal use case of the legend, avoid rendering artefacts. */}
        {/* eslint-disable-next-line react/no-danger */}
        <span dangerouslySetInnerHTML={{ __html: '&#8203;' }} />
      </legend>
    </fieldset>
  );
};

NotchedOutline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  labelWidth: PropTypes.number.isRequired,
  notched: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

export default NotchedOutline;
