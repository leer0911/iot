import React from 'react';
import { cx } from 'emotion';
import { useClasses } from '../../styles';

const styles = theme => ({
  thumb: {
    '&$open': {
      '& $offset': {
        transform: 'scale(1) translateY(-10px)',
      },
    },
  },
  open: {},
  offset: {
    zIndex: 1,
    ...theme.typography.body2,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.2,
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.shortest,
    }),
    top: -34,
    left: 'calc(-50% + -4px)',
    transformOrigin: 'bottom center',
    transform: 'scale(0)',
    position: 'absolute',
  },
  circle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: 'currentColor',
    transform: 'rotate(-45deg)',
  },
  label: {
    color: theme.palette.primary.contrastText,
    transform: 'rotate(45deg)',
  },
});

const ValueLabel = props => {
  const {
    className,
    children,
    index,
    open,
    value,
    valueLabelDisplay,
    valueLabelFormat,
  } = props;

  const classes = useClasses(styles);

  if (valueLabelDisplay === 'off') {
    return children;
  }

  return React.cloneElement(
    children,
    {
      className: cx(
        children.props.className,
        {
          [classes.open]: open || valueLabelDisplay === 'on',
        },
        classes.thumb,
      ),
    },
    <span className={cx(classes.offset, className)}>
      <span className={classes.circle}>
        <span className={classes.label}>
          {typeof valueLabelFormat === 'function'
            ? valueLabelFormat(value, index)
            : valueLabelFormat}
        </span>
      </span>
    </span>,
  );
};

export default ValueLabel;
