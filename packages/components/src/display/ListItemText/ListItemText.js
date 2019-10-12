import React from 'react';
import PropTypes from 'prop-types';
import { useClasses, cx } from '../../styles';
import Typography from '../Typography';
import ListContext from '../List/ListContext';

export const styles = {
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
  },
  multiline: {
    marginTop: 6,
    marginBottom: 6,
  },
  dense: {},
  inset: {
    paddingLeft: 56,
  },
  primary: {},
  secondary: {},
};

const ListItemText = React.forwardRef(function ListItemText(props, ref) {
  const {
    children,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps,
    ...other
  } = props;

  const classes = useClasses(styles);
  const { dense } = React.useContext(ListContext);

  let primary = primaryProp != null ? primaryProp : children;
  if (primary != null && primary.type !== Typography && !disableTypography) {
    primary = (
      <Typography
        variant={dense ? 'body2' : 'body1'}
        className={classes.primary}
        component="span"
        {...primaryTypographyProps}
      >
        {primary}
      </Typography>
    );
  }

  let secondary = secondaryProp;
  if (
    secondary != null &&
    secondary.type !== Typography &&
    !disableTypography
  ) {
    secondary = (
      <Typography
        variant="body2"
        className={classes.secondary}
        color="textSecondary"
        {...secondaryTypographyProps}
      >
        {secondary}
      </Typography>
    );
  }

  return (
    <div
      className={cx(
        classes.root,
        {
          [classes.dense]: dense,
          [classes.inset]: inset,
          [classes.multiline]: primary && secondary,
        },
        className,
      )}
      {...other}
    >
      {primary}
      {secondary}
    </div>
  );
});

ListItemText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disableTypography: PropTypes.bool,
  inset: PropTypes.bool,
  primary: PropTypes.node,
  primaryTypographyProps: PropTypes.object,
  secondary: PropTypes.node,
  secondaryTypographyProps: PropTypes.object,
};

export default ListItemText;
