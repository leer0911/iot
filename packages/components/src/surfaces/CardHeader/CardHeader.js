import React from 'react';
import PropTypes from 'prop-types';

import { cx } from 'emotion';
import { useClasses } from '../../styles';

import Typography from '../../display/Typography';

export const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    flex: '0 0 auto',
    marginRight: 16,
  },
  action: {
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: -8,
    marginRight: -8,
  },
  content: {
    flex: '1 1 auto',
  },
};

const CardHeader = props => {
  const {
    className: classNameProp,
    component: Component = 'div',
    disableTypography = false,
    subheader: subheaderProp,
    subheaderTypographyProps,
    title: titleProp,
    titleTypographyProps,
    action,
    avatar,
    ...other
  } = props;

  const classes = useClasses(styles);

  let title = titleProp;
  if (title != null && title.type !== Typography && !disableTypography) {
    title = (
      <Typography
        variant={avatar ? 'body2' : 'h5'}
        className={classes.title}
        component="span"
        display="block"
        {...titleTypographyProps}
      >
        {title}
      </Typography>
    );
  }

  let subheader = subheaderProp;
  if (
    subheader != null &&
    subheader.type !== Typography &&
    !disableTypography
  ) {
    subheader = (
      <Typography
        variant={avatar ? 'body2' : 'body1'}
        className={classes.subheader}
        color="textSecondary"
        component="span"
        display="block"
        {...subheaderTypographyProps}
      >
        {subheader}
      </Typography>
    );
  }

  return (
    <Component className={cx(classes.root, classNameProp)} {...other}>
      {avatar && <div className={classes.avatar}>{avatar}</div>}
      <div className={classes.content}>
        {title}
        {subheader}
      </div>
      {action && <div className={classes.action}>{action}</div>}
    </Component>
  );
};

CardHeader.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  disableTypography: PropTypes.bool,
  subheader: PropTypes.node,
  subheaderTypographyProps: PropTypes.object,
  title: PropTypes.node,
  titleTypographyProps: PropTypes.object,
  action: PropTypes.node,
  avatar: PropTypes.node,
};

export default CardHeader;
