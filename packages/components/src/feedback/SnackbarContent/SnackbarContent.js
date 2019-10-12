import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import Paper from '../../surfaces/Paper';
import Typography from '../../display/Typography';
import { emphasize } from '../../theme/colorManipulator';

export const styles = theme => {
  const emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  const backgroundColor = emphasize(theme.palette.background.default, emphasis);

  return {
    root: {
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        flexGrow: 'initial',
        minWidth: 288,
      },
    },
    message: {
      padding: '8px 0',
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8,
    },
  };
};

const SnackbarContent = React.forwardRef(function SnackbarContent(props, ref) {
  const { action, className, message, ...other } = props;
  const classes = useClasses(styles);

  return (
    <Paper
      component={Typography}
      variant="body2"
      variantMapping={{
        body1: 'div',
        body2: 'div',
      }}
      role="alertdialog"
      square
      elevation={6}
      className={cx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <div className={classes.message}>{message}</div>
      {action ? <div className={classes.action}>{action}</div> : null}
    </Paper>
  );
});

SnackbarContent.propTypes = {
  action: PropTypes.node,
  className: PropTypes.string,
  message: PropTypes.node,
};

export default SnackbarContent;
